import {  NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { OurstoryComponent } from './components/ourstory/ourstory.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SignInComponent } from './components/sign-in/sign-in.component'


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    OurstoryComponent,
    CreateAccountComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
