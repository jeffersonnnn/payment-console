import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CompleteregComponent } from './completereg/completereg.component';
import { authRoutes } from './authentication.routes';
// import { HomeComponent } from '@app/home';
// import { LayoutComponent } from '@app/layout/layout.component';
import { SharedModule } from '@app/shared/shared.module';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrationComponent, AdminComponent, LoginComponent
  ],
  imports: [
    ReactiveFormsModule, CommonModule, SharedModule, RouterModule.forChild(authRoutes)
  ]
})
export class AuthenticationModule { }
