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

const routes: Routes = [
  { path: "", component:  SplashComponent },
  { path: "content/:id/:contentId", component: DetailsComponent, canActivate: [AuthguardGuard] },
  { path: "content/:id/:contentId/:abstractTitle", component: DetailsComponent, canActivate: [AuthguardGuard] },
  { path: "account", component: AuthComponent, children: [
    { path: "signup", component: SignupComponent },
    { path: "login", component: LoginComponent },
    { path: "verifyemail", component: VerifyemailComponent },
    { path: "setup", component: SetupComponent },
    { path: "profile", component: ProfileComponent },
    { path: "payment", component: PaymentComponent },
    { path: "payment/verify", component: PaymentComponent }
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
