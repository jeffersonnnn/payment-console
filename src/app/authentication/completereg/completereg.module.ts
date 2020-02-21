import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { CompleteregComponent } from '@app/authentication/completereg/completereg.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core';

const routes: Routes = [{
  path: '',
  component: CompleteregComponent,
  canActivate: [AuthGuard],
  data: {title: 'Getting Started', key: 'getting-started', hideSideMenu: true}

},
{
  path: 'activatereg',
  loadChildren: '../../core-app/pages/activateregistered-a/activateregistered-a.module#ActivateregisteredAModule'
},
  {
    path: 'activateregb',
  loadChildren: '../../core-app/pages/activateregistered-b/activateregistered-b.module#ActivateregisteredBModule'
  }];

@NgModule({
  declarations: [CompleteregComponent],
  imports: [
    CommonModule, SharedModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ]
})
export class CompleteregModule { }


