import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { ActivatestarterBComponent } from '@app/core-app/pages/activatestarter-b/activatestarter-b.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ActivatestarterBComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class ActivatestarterBModule { }
