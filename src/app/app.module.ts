import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './shared/modules/primeng.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimeNgModule,
  ],
  declarations: [AppComponent, HomeComponent, LoginComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
