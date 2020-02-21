import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { ApiKeysComponent } from './api-keys.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ApiKeysComponent
  }
];

@NgModule({
  declarations: [ApiKeysComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ApiKeysModule { }
