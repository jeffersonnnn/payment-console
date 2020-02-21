import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthenticationService } from './core/services';
import { User, Role } from './shared/models';

import { filter } from 'rxjs/operators';

// tslint:disable-next-line:component-selector
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    currentUser: User;

    hideNavBar = false;
    pageRoute;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        this.changeHeader(this.router.url);
        this.router.events.pipe(filter (event => event instanceof NavigationEnd)).subscribe(event => {
            this.pageRoute = event;
            this.changeHeader(this.pageRoute.url);
        });
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }


    changeHeader(data: any) {
        // tslint:disable-next-line:triple-equals
        this.hideNavBar = data == '/setup';
        console.log('data set', data);
    }
}
