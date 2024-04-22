import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TitleTextComponent } from './title-text/title-text.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { DescTextComponent } from './desc-text/desc-text.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ //Create the Original ROute (login) and the destined profile page
  { path: 'login', component: LoginComponent},
  { path: 'profile/:name', component: ProfileComponent},
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: '*', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TitleTextComponent,
    ProfilePictureComponent,
    DescTextComponent,
    FormComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(routes), //import this one too
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
