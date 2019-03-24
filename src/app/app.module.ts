import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpaces } from './shared/ConvertToSpaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductService } from './service/product.service';
import { WelcomeComponent } from './Welcome/welcome.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductGuardService } from './service/product-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    WelcomeComponent,
    ProductsDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductsDetailsComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])

  ],
  providers: [ProductService, ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
