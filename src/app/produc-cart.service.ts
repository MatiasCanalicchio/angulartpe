import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __classPrivateFieldSet, __values } from 'tslib';
import { Products } from './product-list/products';

@Injectable({
  providedIn: 'root'
})
//logica del carrito de compras
export class ProducCartService {

  private _cartList:Products[] = [];
  CartList: BehaviorSubject<Products[]> = new BehaviorSubject(this._cartList);

  addToCart(product: Products) {
    let item: Products = this._cartList.find((v1) => v1.nombre == product.nombre)!;
    if (!item){
      this._cartList.push({... product});
    }else{
      item.cantidad += product.cantidad;
    }
    this.CartList.next(this._cartList);
  }

  constructor() { }
}
