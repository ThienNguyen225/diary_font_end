import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './view/users/login/login.component';
import {HomeComponent} from './view/home/home.component';
import {ProfileComponent} from './view/users/profile/profile.component';
import {UpdateComponent} from './view/users/update/update.component';
import {RegisterComponent} from './view/users/register/register.component';
import {LoginedGuard} from './logined.guard';
import {ForgotPasswordComponent} from './view/users/forgot-password/forgot-password.component';
import {CreateComponent} from './view/users/diary/create/create.component';
import {ShowComponent} from './view/users/diary/show/show.component';
import {UpdateDiaryComponent} from './view/users/diary/update-diary/update-diary.component';
import {DeleteComponent} from "./view/users/diary/delete/delete.component";


const routes: Routes = [
  {path: 'signup', component: RegisterComponent},
  {path: '', component: LoginComponent},

  {
    path: 'profile', canActivate: [LoginedGuard],
    children: [
      {path: 'me', component: ProfileComponent},
      {path: 'edit', component: UpdateComponent},
      {path: 'password', component: ForgotPasswordComponent}
    ]
  },
  {
    path: 'page', canActivate: [LoginedGuard],
    children: [
      {path: 'home', component: HomeComponent},
    ]
  },
  {
    path: 'home', canActivate: [LoginedGuard],
    children: [
      {path: 'create', component: CreateComponent},
      {path: 'update/:id', component: UpdateDiaryComponent},
      {path: 'show/:id', component: ShowComponent},
      {path: 'delete/:id', component: DeleteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
