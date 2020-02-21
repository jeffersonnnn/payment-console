import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { CompanyRegComponent } from './company-reg.component';

@NgModule({
  declarations: [CompanyRegComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [CompanyRegComponent]
})
export class CompanyRegModule { }
