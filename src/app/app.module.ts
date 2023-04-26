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

@NgModule({
  declarations: [
    AppComponent,
    TocItemComponent,
    TocComponent,
    DetailsComponent,
    ParagraphComponent,
    MetatypeComponent,
    SplashComponent,
    MetatextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
