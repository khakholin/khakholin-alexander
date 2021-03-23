import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalLayoutGuard implements CanActivate, CanActivateChild {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state);
  }
}
