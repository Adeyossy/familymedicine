import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, concatMap, from, map, observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { handbook } from '../data/handbook';
import { Auth, User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

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
      return this.authService.getFirebaseUser()
        .pipe(concatMap(this.userToActivation.bind(this)));
      // this.authService.getFirebaseAuth().subscribe({
      //   next: auth => {
      //     onAuthStateChanged(auth, user => {
      //       console.log(user);
      //       if (user) {
      //         if (!user.emailVerified) {
      //           return this.router.parseUrl('/account/verifyemail');
      //         }
              
      //         if (!user.displayName) {
      //           return this.router.parseUrl('/account/profile');
      //         }
              
      //         return this.authService.completeRegistration(user as User);
      //       } else {
      //         return this.router.parseUrl('/account/login');
      //       }
      //     })
      //   }
      // });

      // return false;
    }
    return true;
  }

  authToUser(auth: Auth): Observable<User | null> {
    return new Observable<User | null>(function subscribe(subscriber) {
      return auth.onAuthStateChanged(
        user => {
          console.log('user in observable => ', user);
          return subscriber.next(user);
        },
        error => subscriber.error(error),
        () => subscriber.complete()
      );
    });
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
