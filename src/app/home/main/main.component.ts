import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lstProductos: Producto[] = [];

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.listarProductosPorFiltros();
  }

  listarProductosPorFiltros(): void{
    this.productoService.listarPorFiltros('', '', 1).subscribe(
      response=>{
        this.lstProductos = response
      }
    );
  }
}
