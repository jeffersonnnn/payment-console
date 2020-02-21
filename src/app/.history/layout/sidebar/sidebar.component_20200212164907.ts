import { Component, OnInit } from '@angular/core';
import {  } from 
import { RouteServiceService } from '../../core/services/route-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private routeService: RouteServiceService, router) { }

  ngOnInit() {
  }

}
