import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule'
    },
    {
        path: '',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
    }

];

export const appRoutingModule = RouterModule.forRoot(routes);
