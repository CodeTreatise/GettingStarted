import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../service/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    constructor(private _productSerice: ProductService) {

    }
    // Getter setter
    _filterBy: string;
    public get filterBy(): string {
        return this._filterBy;
    }

    public set filterBy(value: string) {
        this._filterBy = value;
        this.filteredProducts = this.filterBy ? this.performFilter(this.filterBy) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];


    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: IProduct) => {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        });
    };


    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        this._productSerice.getProducts()
            .subscribe(
                products => {
                    this.products = products
                    this.filteredProducts = this.products;
                },
                error => this.errorMessage = <any>error
            );
    };

    onNotify(value: string): void {
        alert(value);
    }


}
