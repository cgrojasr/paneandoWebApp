import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoCarrito } from 'src/app/models/ProductoCarrito';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  items: { idProducto: number, cantidad: number}[] = [];
  item = {idProducto: 0, cantidad: 0};

  productos: ProductoCarrito[] = [];
  totalVenta: number = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) { 
    if(localStorage.getItem('cart')==null){
      localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      this.items = JSON.parse(localStorage.getItem('cart') || ''); 
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item.idProducto = params['idProducto'];
      this.item.cantidad = params['cantidad'];
    });

    if(this.item.idProducto !== undefined){
      if(this.items.find(x=>x.idProducto==this.item.idProducto)!==undefined){
        this.items.find(x=>x.idProducto==this.item.idProducto)!.cantidad = this.item.cantidad;
      }
      else {
        this.items.push(this.item);
      }
      localStorage.setItem('cart', JSON.stringify(this.items));
    }

    if(this.items.length > 0){
      this.listarProductos();
    }
  }

  listarProductos(): void{
    var strIdProductos = '';
    this.items.forEach(item => {
      strIdProductos = strIdProductos + item.idProducto + ",";
    })
    if(strIdProductos != ''){
      this.productoService.listarPorIdProductos(strIdProductos).subscribe(
        result => {
          for(let producto of result){
            var productoCarrito: ProductoCarrito = {
              objProducto: producto,
              cantidad: this.items.find(x=> x.idProducto==producto.idProducto)!.cantidad
            };
            this.productos.push(productoCarrito);
            this.totalVenta = this.totalVenta + productoCarrito.objProducto.lstProductoPrecio[0].valorVenta * productoCarrito.cantidad;
          }
        } 
      )
    }
  }

  btnLimpiar_OnClick(): void {
    localStorage.removeItem('cart');
    this.router.navigate(['/comercial/carrito'])
  }

  btnPedidoRegistrar_OnClick():void{
    this.router.navigate(['comercial/pedido'])
  }
}
