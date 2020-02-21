import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { SubAccountsComponent } from '@app/core-app/pages/sub-accounts/sub-accounts.component'; 
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {  path: '',
    component: SubAccountsComponent }
  ]

@NgModule({
  declarations: [SubAccountsComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class SubAccountsModule { }
