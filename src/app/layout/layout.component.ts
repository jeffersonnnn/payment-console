import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { User } from '@app/shared/models';
import { UserService, AuthenticationService } from '@app/core/services';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  loading = false;
  currentUser: User;
  userFromApi: User;

  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
      this.loading = true;
      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
          this.loading = false;
          this.userFromApi = user;
      });
  }
}
