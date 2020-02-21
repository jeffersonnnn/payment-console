import { Routes } from '@angular/router';
import { ActivateregisteredBComponent } from './activateregistered-b/activateregistered-b.component';
import { ActivatestarterComponent } from './activatestarter-a/activatestarter.component';
import { ActivatestarterBComponent } from './activatestarter-b/activatestarter-b.component';

export const pagesRoutes: Routes = [
    {
        path: 'activatestarter',
        component: ActivatestarterComponent
    },
    {
        path: 'activatestarterb',
        component: ActivatestarterBComponent
    },
];
