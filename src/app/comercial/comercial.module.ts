import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoProductoComponent } from './carrito-producto/carrito-producto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoConfirmarComponent } from './pedido-confirmar/pedido-confirmar.component';
import { ComercialRoutingModule } from './comercial-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarritoComponent,
    CarritoProductoComponent,
    PedidoComponent,
    PedidoConfirmarComponent
  ],
  imports: [
    CommonModule,
    ComercialRoutingModule,
    FormsModule
  ]
})
export class ComercialModule { }
