import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { pagesRoutes } from './pages/pages.routes';

import { ActivateregisteredComponent } from './pages/activateregistered-a/activateregistered.component';
import { ActivatestarterComponent } from './pages/activatestarter-a/activatestarter.component';
import { ActivateregisteredBComponent } from './pages/activateregistered-b/activateregistered-b.component';
import { ActivatestarterBComponent } from './pages/activatestarter-b/activatestarter-b.component';
import { SharedModule } from '@app/shared/shared.module';
import { CompanyRegModule } from '@app/core-app/modals/reg-modals/company-reg/company-reg.module';
import { BizInfoModule } from '@app/core-app/modals/reg-modals/biz-info/biz-info.module';
import { CorpAccountModule } from '@app/core-app/modals/reg-modals/corp-account/corp-account.module';
import { ThankYouModule } from './modals/reg-modals/thank-you/thank-you.module';
// import { ThankYouComponent } from './modals/reg-modals/thank-you/thank-you.component';

@NgModule({
  declarations: [
    ActivatestarterComponent,
    ActivatestarterBComponent,
    // ThankYouComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CompanyRegModule,
    BizInfoModule,
    CorpAccountModule,
    RouterModule.forChild(pagesRoutes)
  ]
})
export class CoreAppModule { }
