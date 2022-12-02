import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProducCartService } from '../produc-cart.service';
import { Products } from '../product-list/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartList$!: Observable <Products[]>;

  constructor(private cart :ProducCartService){
    this.cartList$ = cart.CartList.asObservable();
  }
}
