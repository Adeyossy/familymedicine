import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TocItemComponent } from './toc-item/toc-item.component';
import { TocComponent } from './toc/toc.component';

@NgModule({
  declarations: [
    AppComponent,
    TocItemComponent,
    TocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
