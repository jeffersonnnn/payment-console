import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { ActivateregisteredComponent } from '@app/core-app/pages/activateregistered-a/activateregistered.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ActivateregisteredComponent
  }
];


@NgModule({
  declarations: [ActivateregisteredComponent],
  // exports: [ActivateregisteredComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class ActivateregisteredAModule { }
