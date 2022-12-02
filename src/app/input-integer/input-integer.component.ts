import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../product-list/products';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upCantidad():void{
    if (this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else{
      this.maxReached.emit("se alcanzo el maximo");
    }
  }
  
  downCantidad():void{
    if (this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  } 

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function upCantidad() {
  throw new Error('Function not implemented.');
}

function downCantidad() {
  throw new Error('Function not implemented.');
}

