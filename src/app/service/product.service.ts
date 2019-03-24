import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable()
export class ProductService {

    private _productUrl = '/api/products/products.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        console.log('Getting all products');
        return this._http.get<IProduct[]>(this._productUrl)
            .pipe(
                catchError(this.handleError),
                tap(data => console.log(JSON.stringify(data)))
            );

    };
    // iproduct End

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
// end of class