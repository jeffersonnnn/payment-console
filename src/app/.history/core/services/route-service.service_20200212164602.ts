import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor() { }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    let title: string = routeSnapshot.data && routeSnapshot.data['title'] ? routeSnapshot.data['title'] : 'Title';
    if (routeSnapshot.firstChild) {
    title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
    }
}
