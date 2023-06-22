import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { handbook } from '../data/handbook';
import { User, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  authService = inject(AuthService);

  router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const id = route.params['id'];
    // console.log("route params => ", route.params);
    // console.log("route.params.id => ", id);
    const levelofAccess = handbook[id].level_of_access;

    this.authService.setLastUrl('/'.concat(route.url.join('/')));
    if (levelofAccess > 1) {
      if (this.authService.user) {
        if (!this.authService.user.emailVerified) {
          return this.router.parseUrl('/account/verifyemail');
        }
    
        if (!this.authService.user.displayName) {
          return this.router.parseUrl('/account/profile');
        }
    
        return this.authService.completeRegistration(this.authService.user as User);
      } else {
        return this.router.parseUrl('/account/login');
      }
    }
    return true;
  }

}
