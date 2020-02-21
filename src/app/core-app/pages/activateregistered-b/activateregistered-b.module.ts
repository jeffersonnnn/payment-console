import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { ActivateregisteredBComponent } from '@app/core-app/pages/activateregistered-b/activateregistered-b.component';
import { Routes, RouterModule } from '@angular/router';

import { CompanyRegModule } from '@app/core-app/modals/reg-modals/company-reg/company-reg.module';
import { BizInfoModule } from '@app/core-app/modals/reg-modals/biz-info/biz-info.module';
import { CorpAccountModule } from '@app/core-app/modals/reg-modals/corp-account/corp-account.module';
import { ThankYouModule } from '@app/core-app/modals/reg-modals/thank-you/thank-you.module';

const routes: Routes = [
  {
    path: '',
    component: ActivateregisteredBComponent
  },
];

@NgModule({
  declarations: [ActivateregisteredBComponent],
  imports: [
    CommonModule,
    SharedModule,
    BizInfoModule,
    CompanyRegModule,
    CorpAccountModule,
    ThankYouModule,
    RouterModule.forChild(routes)
  ]
})
export class ActivateregisteredBModule { }


