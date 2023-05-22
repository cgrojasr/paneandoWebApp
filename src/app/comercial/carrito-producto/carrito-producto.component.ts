import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoCatalogo } from 'src/app/models/Producto';
import { ProductoCarrito } from 'src/app/models/ProductoCarrito';

@Component({
  selector: 'app-carrito-producto',
  templateUrl: './carrito-producto.component.html',
  styleUrls: ['./carrito-producto.component.css']
})
export class CarritoProductoComponent implements OnInit {

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

  @Output() eventEliminarCarrito: EventEmitter<number> = new EventEmitter();

  constructor(
    private router: Router,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  btnEliminar_OnClick(id_producto: number): void{
    var items: ProductoCatalogo[] = [];
    items = JSON.parse(localStorage.getItem('cart') || '');
    items.splice(items.findIndex(x=>x.id_producto==id_producto),1);
    localStorage.setItem('cart', JSON.stringify(items));
    this.eventEliminarCarrito.emit(id_producto);
  }

  refresh_page():void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/comercial/carrito'])
  }
}
