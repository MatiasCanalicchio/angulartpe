import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Products } from './product-list/products';

const url = 'https://638a06694eccb986e8a1708e.mockapi.io/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Products[]>{
    return this.http.get<Products[]>(url)
    .pipe(
      tap( (product: Products[]) =>product.forEach(products => products.cantidad = 0))
    );
  }
}
