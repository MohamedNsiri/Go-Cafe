import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private platformId: Object;

  constructor(private http: HttpClient,  @Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  users: any = [];

  create_account(userData: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/create_account', userData);
  }

  login(data: any) {
    return this.http.post<any>('http://127.0.0.1:8000/api/login', data);
  }

  storeToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('auth_token', token);
    }
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('auth_token');
    }
    return null;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('auth_token');
    }
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/user');
  }
}
