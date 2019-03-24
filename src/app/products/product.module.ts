import { NgModule } from '@angular/core';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from '../service/product-guard.service';
import { ProductService } from '../service/product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    
    ProductsDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductsDetailsComponent
      },
    ]),
    SharedModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
