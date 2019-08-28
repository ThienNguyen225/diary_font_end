import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './view/users/login/login.component';
import {HomeComponent} from './view/home/home.component';
import {ProfileComponent} from './view/users/profile/profile.component';
import {UpdateComponent} from './view/users/update/update.component';
import {RegisterComponent} from './view/users/register/register.component';
import {LoginedGuard} from './logined.guard';
import {ForgotPasswordComponent} from './view/users/forgot-password/forgot-password.component';
import {HeaderComponent} from './view/header/header.component';


const routes: Routes = [
  {path: 'signup', component: RegisterComponent},
  {path: '', component: LoginComponent},
  {path: '', component: HeaderComponent},

  {
    path: 'profile', canActivate: [LoginedGuard],
    children: [
      {path: 'me', component: ProfileComponent},
      {path: 'edit', component: UpdateComponent},
      {path: 'password', component: ForgotPasswordComponent}
    ]
  },
  {
    path: 'page' , canActivate: [LoginedGuard],
    children: [
      {path: 'home', component: HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
