import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ComercialComponent } from './comercial.component';

const routes: Routes = [
  {
    path: '',
    component: ComercialComponent,
    children: [
      {
        path: '',
        redirectTo: 'carrito',
        pathMatch: 'full'
      },
      {
        path: 'carrito',
        component: CarritoComponent
      },
      {
        path: 'carrito/:idProducto/:cantidad',
        component: CarritoComponent
      },
      {
        path: 'pedido',
        component: PedidoComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComercialRoutingModule { }
