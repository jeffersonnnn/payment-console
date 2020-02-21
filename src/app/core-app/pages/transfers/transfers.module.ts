import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { TransfersComponent } from '@app/core-app/pages/transfers/transfers.component'; 
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  path: '',
    component: TransfersComponent }
  ]

@NgModule({
  declarations: [TransfersComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class TransfersModule { }
