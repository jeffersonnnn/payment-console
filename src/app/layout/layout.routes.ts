import { Routes } from '@angular/router';

import { AuthGuard } from '../core';
import { LayoutComponent } from './layout.component';

export const homeRoute: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'setup',
                loadChildren: './../authentication/completereg/completereg.module#CompleteregModule'
            },
            {
                path: 'transactions',
                loadChildren: './../core-app/pages/transactions/transactions.module#TransactionsModule'
            },
            {
                path: 'balances',
                loadChildren: './../core-app/pages/balances/balances.module#BalancesModule'
            },
            {
                path: 'dashboard',
                loadChildren: './../core-app/pages/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'transfers',
                loadChildren: './../core-app/pages/transfers/transfers.module#TransfersModule'
            },
            {
                path: 's-accounts',
                loadChildren: './../core-app/pages/sub-accounts/sub-accounts.module#SubAccountsModule'
            },
            {
                path: 'b-payments',
                loadChildren: './../core-app/pages/billpayments/billpayments.module#BillpaymentsModule'
            },
            {
                path: 'settings',
                loadChildren: '../core-app/pages/settings/settings.module#SettingsModule',
            },
        ]
    },
];
