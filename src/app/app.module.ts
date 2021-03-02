import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SiteComponent } from './site/site.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor, } from './helpers/jwt.interceptors';
import { fakeBackendProvider } from './helpers/fake-backend';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AlertComponent } from './components/alert.component';
import { MustMatchDirective } from './helpers/must.match.directives'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiteComponent,
    RegisterComponent,
    AlertComponent,
    MustMatchDirective,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
