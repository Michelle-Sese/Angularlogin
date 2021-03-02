import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SiteComponent } from './site/site.component';


const routes: Routes = [

  { 
    path: '',
    component: RegisterComponent
   },
   { 
     path: 'login',
     component: LoginComponent 
    },
    { 
      path: 'site',
      component: SiteComponent 
     },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};


