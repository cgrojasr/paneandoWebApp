import { Component, Input, OnInit } from '@angular/core';
import { Producto, ProductoCatalogo } from 'src/app/models/Producto';

@Component({
  selector: 'app-main-producto',
  templateUrl: './main-producto.component.html',
  styleUrls: ['./main-producto.component.css']
})
export class MainProductoComponent implements OnInit {
  @Input() objProducto: ProductoCatalogo = {
    id_producto: 0,
    nombre: '',
    descripcion: '',
    image_url: '',
    tipo_producto: '',
    valor_venta: 0
  }

  constructor(
    
  ) { }

  ngOnInit(): void {
  }
}
