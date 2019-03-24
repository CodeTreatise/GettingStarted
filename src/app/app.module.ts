import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './Welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
