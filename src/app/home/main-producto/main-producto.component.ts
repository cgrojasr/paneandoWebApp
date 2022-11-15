import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-main-producto',
  templateUrl: './main-producto.component.html',
  styleUrls: ['./main-producto.component.css']
})
export class MainProductoComponent implements OnInit {
  @Input() objProducto: Producto = {
    idProducto: 0,
    nombre: '',
    descripcion: '',
    imageURL: '',
    objTipoProducto: {
      idTipoPedido: 0,
      nombre: '',
      activo: false
    },
    activo: false
  }

  constructor(
    
  ) { }

  ngOnInit(): void {
  }
}
