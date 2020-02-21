import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { GeneralComponent } from './general.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent
  }
];

@NgModule({
  declarations: [GeneralComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [GeneralComponent]
})
export class GeneralModule { }
