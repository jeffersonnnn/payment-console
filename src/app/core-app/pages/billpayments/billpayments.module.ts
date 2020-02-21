import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { BillpaymentsComponent } from '@app/core-app/pages/billpayments/billpayments.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BillpaymentsComponent
  }
];

@NgModule({
  declarations: [BillpaymentsComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class BillpaymentsModule { }
