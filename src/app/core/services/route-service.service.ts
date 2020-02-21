import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor() { }

  public getPageData(routeSnapshot: ActivatedRouteSnapshot): any {
    let data: any = routeSnapshot.data || null;
    if (routeSnapshot.firstChild) {
    data = this.getPageData(routeSnapshot.firstChild) || data;
    }
    return data;
    }
}
