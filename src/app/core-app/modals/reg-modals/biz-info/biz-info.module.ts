import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { BizInfoComponent } from './biz-info.component';

@NgModule({
  declarations: [BizInfoComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [BizInfoComponent]
})
export class BizInfoModule { }
