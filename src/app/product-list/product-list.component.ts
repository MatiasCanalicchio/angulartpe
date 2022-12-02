import { Component, ViewContainerRef } from '@angular/core';
import { ProducCartService } from '../produc-cart.service';
import { ProductDataService } from '../product-data.service';
import { Products } from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Products[] = [];
 
  constructor(
    private cart:ProducCartService,
    private productDataService: ProductDataService
    ) {
   }

  ngOnInit(): void {
    this.productDataService.getAll()
    .subscribe(products => this.products = products);
  }

  addToCart(product: Products): void{
    this.cart.addToCart(product);
    product.stock -= product.cantidad;
    product.cantidad = 0;
  }

  maxReached(m:string){
    alert (m);
  }
}
