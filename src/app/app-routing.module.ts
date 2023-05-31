import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SplashComponent } from './widgets/splash/splash.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: "", component:  SplashComponent },
  { path: "content/:id/:contentId", component: DetailsComponent, canActivate: [AuthguardGuard] },
  { path: "account", component: AuthComponent, children: [
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
