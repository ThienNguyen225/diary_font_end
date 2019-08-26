import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './users/login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './users/profile/profile.component';
import {UpdateComponent} from './users/update/update.component';
import {RegisterComponent} from './users/register/register.component';
import {LoginGuard} from "./login.guard";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {
    path: 'user', canActivate: [LoginGuard],
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/edit/:id', component: UpdateComponent}
    ]
  },
  {
    path: 'page', canActivate: [LoginGuard],
    children: [
      {path: 'home', component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
