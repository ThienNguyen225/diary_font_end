import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './view/users/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './view/home/home.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {ProfileComponent} from './view/users/profile/profile.component';
import {UpdateComponent} from './view/users/update/update.component';
import {RegisterComponent} from './view/users/register/register.component';
import {TokenInterceptor} from './interceptor/token.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './view/users/forgot-password/forgot-password.component';
import { HeaderComponent } from './view/header/header.component';
import {DeleteComponent} from './view/users/diary/delete/delete.component';
import {UpdateDiaryComponent} from './view/users/diary/update-diary/update-diary.component';
import {ShowComponent} from './view/users/diary/show/show.component';
import {SidebarComponent} from './view/sidebar/sidebar.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {CreateComponent} from './view/users/diary/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    UpdateComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    DeleteComponent,
    UpdateDiaryComponent,
    ShowComponent,
    SidebarComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule,
    CKEditorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
