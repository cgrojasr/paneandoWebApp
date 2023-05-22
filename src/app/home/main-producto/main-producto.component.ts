import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto, ProductoCatalogo, ProductoLocalStorage } from 'src/app/models/Producto';
import { ProductoCarrito } from 'src/app/models/ProductoCarrito';

@Component({
  selector: 'app-main-producto',
  templateUrl: './main-producto.component.html',
  styleUrls: ['./main-producto.component.css']
})
export class MainProductoComponent implements OnInit {
  //hiddenSelected: boolean = true;

  @Input() objProducto: ProductoCatalogo = {
    id_producto: 0,
    nombre: '',
    descripcion: '',
    image_url: '',
    tipo_producto: '',
    valor_venta: 0,
    cantidad: 0,
    valor_total: 0,
    selected: false
  }
  hiddenSelected: boolean = true;
  cantidad: number = 0;

  @Output() eventAgregarCarrito: EventEmitter<ProductoCatalogo> = new EventEmitter();
  @Output() eventModificarCarrito: EventEmitter<ProductoCatalogo> = new EventEmitter();
  @Output() eventEliminarCarrito: EventEmitter<number> = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
    this.cantidad = this.objProducto.cantidad
  }

  btnCantidad_OnSelected(): void {
    this.objProducto.cantidad = this.cantidad;
    this.objProducto.valor_total = this.objProducto.valor_venta * this.objProducto.cantidad;
    this.eventModificarCarrito.emit(this.objProducto);
  }

  btnAgregarCarrito_OnClick(cantidad: number): void{
    this.objProducto.cantidad = cantidad;
    this.objProducto.valor_total = this.objProducto.valor_venta * cantidad;
    this.cantidad = cantidad;
    this.eventAgregarCarrito.emit(this.objProducto);
    this.objProducto.selected = true;
  }

  btnEliminarCarrito_OnClick(id_producto:number): void {
    this.objProducto.selected = false  ;
    this.cantidad = 0;
    this.eventEliminarCarrito.emit(id_producto);
  }
}
