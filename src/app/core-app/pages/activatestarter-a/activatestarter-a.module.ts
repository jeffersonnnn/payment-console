import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { ActivatestarterComponent } from '@app/core-app/pages/activatestarter-a/activatestarter.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActivatestarterComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class ActivatestarterAModule { }
