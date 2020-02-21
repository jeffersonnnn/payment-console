import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component'
import { SharedModule } from '@app/shared/shared.module';
import { LayoutComponent } from './layout.component';

import { RouterModule } from '@angular/router';
import { homeRoute } from './layout.routes';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(homeRoute)
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
