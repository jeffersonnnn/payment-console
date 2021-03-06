import { Component } from '@angular/core';
import { Router } from '@angular/router';


// import { AuthenticationService } from './core/services';
import { AuthenticationService } from '@app/core/services';
import { User, Role } from '@app/shared/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

}


