import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SplashComponent } from './widgets/splash/splash.component';

const routes: Routes = [
  { path: "", component:  SplashComponent },
  { path: "content/:contentId", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
