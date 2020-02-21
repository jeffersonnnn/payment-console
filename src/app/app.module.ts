declare const $: any;

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './core';

// Feature Modules
import { SharedModule } from '../app/shared/shared.module'
import { AuthenticationModule } from './authentication/authentication.module';
import { CoreAppModule } from './core-app/core-app.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        SharedModule,
        AuthenticationModule,
        LayoutModule,
        CoreAppModule
    ],
    declarations: [
        AppComponent,
        ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

window['jquery'] = window['$'] = $;