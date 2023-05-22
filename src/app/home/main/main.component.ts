import { Component, OnInit } from '@angular/core';
import { Producto, ProductoCatalogo, ProductoLocalStorage } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  itemsCatalogo: ProductoCatalogo[] = [];
  txtBusqueda: String = ""
  itemsCarrito: ProductoCatalogo[] = [];
  cantidad: number = 0;

  constructor(
    private productoService: ProductoService
  ) { 
    if(localStorage.getItem('cart')==null){
      localStorage.setItem('cart', JSON.stringify(this.itemsCarrito));
    } else {
      this.itemsCarrito = JSON.parse(localStorage.getItem('cart') || ''); 
      this.cantidad = this.itemsCarrito.length;
    }
  }

  ngOnInit(): void {
    this.listarProductosPorFiltros();
  }

  listarProductosPorFiltros(): void{
    this.productoService.catalogoDisponible(this.txtBusqueda).subscribe(
      response=>{
        this.itemsCatalogo = response;
        for(let producto of this.itemsCatalogo){
          if(this.itemsCarrito.find(x=>x.id_producto == producto.id_producto)){
            producto.cantidad = this.itemsCarrito.find(x=>x.id_producto == producto.id_producto)?.cantidad??0;
            producto.selected = true;
          }
        }
      }
    );
  }

  btnAgregarCarrito_OnClick(objProducto: ProductoCatalogo): void{
    if(this.itemsCarrito.find(x=>x.id_producto==objProducto.id_producto)===undefined){
      this.itemsCarrito.push(objProducto);
      localStorage.setItem('cart', JSON.stringify(this.itemsCarrito.sort(x=>x.id_producto)));
      this.cantidad = this.itemsCarrito.length;
    }
  }

  btnEliminarCarrito_OnClick(id_producto:number): void{
    this.itemsCarrito = this.itemsCarrito.filter(x=> x.id_producto!=id_producto);
    localStorage.setItem('cart', JSON.stringify(this.itemsCarrito.sort(x=>x.id_producto)));
    this.cantidad = this.itemsCarrito.length;
  }

  selCantidad_OnSelected(objProducto: ProductoCatalogo): void {
    this.itemsCarrito = this.itemsCarrito.filter(x=>x.id_producto != objProducto.id_producto)
    this.itemsCarrito.push(objProducto);
    localStorage.setItem('cart', JSON.stringify(this.itemsCarrito.sort(x=>x.id_producto)));
    this.cantidad = this.itemsCarrito.length;
  }

  btnBuscar_OnClick(){
    this.listarProductosPorFiltros();
  }
}
