import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoCatalogo } from 'src/app/models/Producto';
import { ProductoCarrito } from 'src/app/models/ProductoCarrito';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  itemsCarrito: ProductoCatalogo[] = [];
  total_venta: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { 
    if(localStorage.getItem('cart')==null){
      localStorage.setItem('cart', JSON.stringify(this.itemsCarrito));
    } else {
      this.itemsCarrito = JSON.parse(localStorage.getItem('cart') || ''); 
    }
  }

  ngOnInit(): void {
    if(this.itemsCarrito.length > 0){
      this.actualizarProductosCarrito();
    }
  }

  actualizarProductosCarrito(): void{
    var strIdProductos = '';
    this.itemsCarrito.forEach(item => {
      strIdProductos = strIdProductos + item.id_producto + ",";
    })
    if(strIdProductos != ''){
      this.productoService.listarPorIdProductos(strIdProductos.substring(0, strIdProductos.length - 1)).subscribe(
        result => {
          for(let producto of result){
            producto.cantidad = this.itemsCarrito.find(x=> x.id_producto==producto.id_producto)!.cantidad;
            producto.valor_total = producto.valor_venta * producto.cantidad;
            this.total_venta = this.total_venta + producto.valor_total
          };
          localStorage.removeItem('cart');
          localStorage.setItem('cart', JSON.stringify(result));
        }
      )
    }
  }

  btnLimpiar_OnClick(): void {
    localStorage.removeItem('cart');
    this.itemsCarrito = [];
    this.total_venta = 0;
  }

  eliminarProductoCarrito(id_producto:number): void{
    if(localStorage.getItem('cart')!=null){
      this.itemsCarrito = JSON.parse(localStorage.getItem('cart') || ''); 
      this.total_venta = this.itemsCarrito.reduce((total, item) => total + item.valor_total, 0);
    }
  }

  btnPedidoRegistrar_OnClick():void{
    this.router.navigate(['comercial/pedido'])
  }
}
