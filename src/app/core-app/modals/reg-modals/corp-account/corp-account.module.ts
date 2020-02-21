import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { CorpAccountComponent } from './corp-account.component';


@NgModule({
  declarations: [CorpAccountComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [CorpAccountComponent]
})
export class CorpAccountModule { }
