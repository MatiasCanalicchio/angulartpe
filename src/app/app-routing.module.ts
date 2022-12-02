import { ProductComponent } from './product/product.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonaContactComponent } from './nona-contact/nona-contact.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'product',
    pathMatch:'full'
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'contacto',
    component: NonaContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
