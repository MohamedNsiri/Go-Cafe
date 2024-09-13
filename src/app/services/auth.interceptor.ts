import { HttpInterceptorFn } from '@angular/common/http';
import { DataService } from './data.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const dataService = inject(DataService);
  const token = dataService.getToken();

  console.log('token header');

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` //adds token to all urls
      }
    });

    console.log('token ', authReq);
    return next(authReq);
  }
  return next(req);
};
