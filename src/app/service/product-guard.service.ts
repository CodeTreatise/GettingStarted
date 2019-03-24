import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(router: ActivatedRouteSnapshot): boolean {
    let id = +router.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid Product Id');
      this._router.navigate(['/products']);
      return false;
    };
    return true;
  }


}
