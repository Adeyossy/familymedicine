import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SplashComponent } from './widgets/splash/splash.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { AuthComponent } from './auth/auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SetupComponent } from './auth/setup/setup.component';
import { PaymentComponent } from './auth/payment/payment.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { VerifyemailComponent } from './auth/verifyemail/verifyemail.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", component:  SplashComponent },
  { path: "content/:id/:contentId", component: DetailsComponent, canActivate: [AuthguardGuard] },
  { path: "content/:id/:contentId/:abstractTitle", component: DetailsComponent, canActivate: [AuthguardGuard] },
  { path: "account", component: AuthComponent, children: [
    { path: "signup", component: SignupComponent, 
      title: 'Sign Up to use the Handbook'},
    { path: "login", component: LoginComponent,
      title: 'Login | Residency Handbook'},
    { path: "verifyemail", component: VerifyemailComponent, 
      title: 'Verify Your Email | Residency Handbook', canActivate: [AuthGuard] },
    { path: "setup", component: SetupComponent,
      title: 'Setup Your Account', canActivate: [AuthGuard] },
    { path: "profile", component: ProfileComponent,
      title: 'Complete Your Profile', canActivate: [AuthGuard] },
    { path: "payment", component: PaymentComponent,
      title: 'Pay for the Handbook', canActivate: [AuthGuard] },
    { path: "payment/verify", component: PaymentComponent,
      title: 'Pay for the Handbook', canActivate: [AuthGuard] }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
