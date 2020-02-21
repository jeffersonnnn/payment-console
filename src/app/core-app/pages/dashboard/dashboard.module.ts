import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from '@app/core-app/pages/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, ChartsModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
