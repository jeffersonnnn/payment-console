import { Routes } from '@angular/router';
import { AdminComponent } from '../authentication/admin';
import { LoginComponent } from '../authentication/login';
import { RegistrationComponent } from './registration/registration.component';
import { CompleteregComponent } from './completereg/completereg.component';
import { AuthGuard } from '../core';
import { Role } from '../shared/models';


export const authRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
];

