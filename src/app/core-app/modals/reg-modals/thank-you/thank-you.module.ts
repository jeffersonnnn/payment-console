import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';

import { ThankYouComponent } from './thank-you.component';

@NgModule({
  declarations: [ThankYouComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [ThankYouComponent]
})
export class ThankYouModule { }
