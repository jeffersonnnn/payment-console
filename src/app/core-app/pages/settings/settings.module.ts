import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SettingsComponent } from '@app/core-app/pages/settings/settings.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  },
  {
    path: 'general',
    loadChildren: '../settings/setting-tabs/general/general.module#GeneralModule'
  }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    NgbModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
