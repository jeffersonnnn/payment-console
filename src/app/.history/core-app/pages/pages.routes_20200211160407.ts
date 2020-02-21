import { Routes } from '@angular/router';
import { ActivateregisteredComponent } from './activateregistered-a/activateregistered.component';
import { ActivateregisteredBComponent } from './activateregistered-b/activateregistered-b.component';
import { ActivatestarterComponent } from './activatestarter-a/activatestarter.component';
import { ActivatestarterBComponent } from './activatestarter-b/activatestarter-b.component';
import { SettingsComponent } from './settings/settings.component';

export const pagesRoutes: Routes = [
    {
        path: 'activatereg',
        component: ActivateregisteredComponent
    },
    {
        path: 'activateregb',
        component: ActivateregisteredBComponent
    },
    {
        path: 'activatestarter',
        component: ActivatestarterComponent
    },
    {
        path: 'activatestarterb',
        component: ActivatestarterBComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];
