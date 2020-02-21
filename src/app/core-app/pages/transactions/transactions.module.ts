import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { TransactionsComponent } from '@app/core-app/pages/transactions/transactions.component'; 
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{  path: '',
  component: TransactionsComponent }
]

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)

  ]
})
export class TransactionsModule { }
