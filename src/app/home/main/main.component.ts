import { Component, OnInit } from '@angular/core';
import { Producto, ProductoCatalogo, ProductoLocalStorage } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lstProductos: ProductoCatalogo[] = [];
  txtBusqueda: String = ""
  items: ProductoCatalogo[] = [];
  cantidad: number = 0;

  constructor(
    private productoService: ProductoService
  ) { 
    if(localStorage.getItem('cart')==null){
      localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      this.items = JSON.parse(localStorage.getItem('cart') || ''); 
      this.cantidad = this.items.length;
    }
  }

  ngOnInit(): void {
    this.listarProductosPorFiltros();
  }

  listarProductosPorFiltros(): void{
    this.productoService.catalogoDisponible(this.txtBusqueda).subscribe(
      response=>{
        this.lstProductos = response;
        for(let producto of this.lstProductos){
          if(this.items.find(x=>x.id_producto == producto.id_producto)){
            producto.cantidad = this.items.find(x=>x.id_producto == producto.id_producto)?.cantidad;
            producto.selected = true;
          }
        }
      }
    );
  }

  btnAgregarCarrito_OnClick(objProducto: ProductoCatalogo): void{
    if(this.items.find(x=>x.id_producto==objProducto.id_producto)===undefined){
      this.items.push(objProducto);
      localStorage.setItem('cart', JSON.stringify(this.items.sort(x=>x.id_producto)));
      this.cantidad = this.items.length;
    }
  }

  btnEliminarCarrito_OnClick(id_producto:number): void{
    this.items = this.items.filter(x=> x.id_producto!=id_producto);
    localStorage.setItem('cart', JSON.stringify(this.items.sort(x=>x.id_producto)));
    this.cantidad = this.items.length;
  }

  selCantidad_OnSelected(objProducto: ProductoCatalogo): void {
    this.items = this.items.filter(x=>x.id_producto != objProducto.id_producto)
    this.items.push(objProducto);
    localStorage.setItem('cart', JSON.stringify(this.items.sort(x=>x.id_producto)));
    this.cantidad = this.items.length;
  }

  btnBuscar_OnClick(){
    this.listarProductosPorFiltros();
  }
}
