import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { pagesRoutes } from './pages/pages.routes';

import { SettingsComponent } from './pages/settings/settings.component';
import { ActivateregisteredComponent } from './pages/activateregistered-a/activateregistered.component';
import { ActivatestarterComponent } from './pages/activatestarter-a/activatestarter.component';
import { ActivateregisteredBComponent } from './pages/activateregistered-b/activateregistered-b.component';
import { ActivatestarterBComponent } from './pages/activatestarter-b/activatestarter-b.component';
// import { TransfersComponent } from './pages/transfers/transfers.component';
// import { BalancesComponent } from './pages/balances/balances.component';
// import { SubAccountsComponent } from './pages/sub-accounts/sub-accounts.component';
// import { BillpaymentsComponent } from './pages/billpayments/billpayments.component';
// import { PaymentlinksComponent } from './pages/paymentlinks/paymentlinks.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { PayPlansComponent } from './pages/pay-plans/pay-plans.component';
// import { SubcriptionsComponent } from './pages/subcriptions/subcriptions.component';
// import { InvoicesComponent } from './pages/invoices/invoices.component';
// import { CustomersComponent } from './pages/customers/customers.component';
// import { InsightsComponent } from './pages/insights/insights.component';
// import { HelpComponent } from './pages/help/help.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [SettingsComponent, ActivatestarterComponent, ActivateregisteredBComponent, ActivatestarterBComponent],
  imports: [
    CommonModule, RouterModule.forChild(pagesRoutes)
  ]
})
export class CoreAppModule { }
