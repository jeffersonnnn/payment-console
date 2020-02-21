import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { RouteServiceService } from '../../core/services/route-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private routeService: RouteServiceService, router: Routes ) { }

  ngOnInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event =>  {});
  }

}
