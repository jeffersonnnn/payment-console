import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { RouteServiceService } from '../../core/services/route-service.service';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  pageData: any;
  hideMenu = false;

  constructor(private routeService: RouteServiceService, private router: Router) { }

  ngOnInit() {
    this.pageData = this.routeService.getPageData(this.router.routerState.snapshot.root);
    console.log('PageData A', this.pageData);
    this.processRouteData(this.pageData);

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event =>  {
      this.pageData = this.routeService.getPageData(this.router.routerState.snapshot.root);
      console.log('PageData', this.pageData);
      this.processRouteData(this.pageData);
    });
  }

  processRouteData(data: any) {
    if (data) {
      this.hideMenu = data.hideSideMenu;
    } else {
      this.hideMenu = false;
    }
  }

}
