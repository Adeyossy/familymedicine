import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SplashComponent } from './widgets/splash/splash.component';
import { AuthguardGuard } from './auth/authguard.guard';

const routes: Routes = [
  { path: "", component:  SplashComponent },
  { path: "content/:id/:contentId", component: DetailsComponent, canActivate: [AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
