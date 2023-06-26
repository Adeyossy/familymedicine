import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, concatMap, from, of, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authService = inject(AuthService);

  router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.authService.getFirebaseUser().pipe(map(user => user !== null));
        
      // .pipe(concatMap(this.userToActivation.bind(this)));
  }
  
  userToActivation(user: User | null): Observable<boolean | UrlTree> {
    if (user) {
      if (!user.emailVerified) {
        return of(this.router.parseUrl('/account/verifyemail'));
      }
      
      if (!user.displayName) {
        return of(this.router.parseUrl('/account/profile'));
      }
      // from(onAuthStateChanged(auth, (user) => {}))
      
      return from(this.authService.completeRegistration(user as User));
    } else {
      return of(this.router.parseUrl('/account/login'));
    }
  }
}
