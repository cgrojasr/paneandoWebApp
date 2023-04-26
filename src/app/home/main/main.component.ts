import { Component, OnInit } from '@angular/core';
import { Producto, ProductoCatalogo } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lstProductos: ProductoCatalogo[] = [];
  texto: String = ""

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.listarProductosPorFiltros();
  }

  listarProductosPorFiltros(): void{
    this.productoService.catalogoDisponible(this.texto).subscribe(
      response=>{
        this.lstProductos = response
      }
    );
  }

  btnBuscar_OnClick(){
    this.listarProductosPorFiltros();
  }
}
