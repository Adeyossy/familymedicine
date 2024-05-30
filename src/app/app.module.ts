import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TocItemComponent } from './toc-item/toc-item.component';
import { TocComponent } from './toc/toc.component';
import { DetailsComponent } from './details/details.component';
import { ParagraphComponent } from './widgets/paragraph/paragraph.component';
import { MetatypeComponent } from './metatype/metatype.component';
import { SplashComponent } from './widgets/splash/splash.component';
import { MetatextComponent } from './metatext/metatext.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { EmailPasswordComponent } from './auth/email-password/email-password.component';
import { SlideshowComponent } from './widgets/slideshow/slideshow.component';
import { AuthComponent } from './auth/auth/auth.component';
import { NotificationsComponent } from './widgets/notifications/notifications.component';
import { SetupComponent } from './auth/setup/setup.component';
import { PaymentComponent } from './auth/payment/payment.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { HeaderComponent } from './widgets/header/header.component';
import { VerifyemailComponent } from './auth/verifyemail/verifyemail.component';
import { ResetComponent } from './auth/reset/reset.component';
import { AbstractComponent } from './abstract/abstract.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TocItemComponent,
    TocComponent,
    DetailsComponent,
    ParagraphComponent,
    MetatypeComponent,
    SplashComponent,
    MetatextComponent,
    SignupComponent,
    LoginComponent,
    EmailPasswordComponent,
    SlideshowComponent,
    AuthComponent,
    NotificationsComponent,
    SetupComponent,
    PaymentComponent,
    ProfileComponent,
    HeaderComponent,
    VerifyemailComponent,
    ResetComponent,
    AbstractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
