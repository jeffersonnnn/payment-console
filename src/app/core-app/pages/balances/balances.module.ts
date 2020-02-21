import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { BalancesComponent } from '@app/core-app/pages/balances/balances.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BalancesComponent
  }
];

@NgModule({
  declarations: [BalancesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BalancesModule { }
