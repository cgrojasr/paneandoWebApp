import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoCarrito } from 'src/app/models/ProductoCarrito';

@Component({
  selector: 'app-carrito-producto',
  templateUrl: './carrito-producto.component.html',
  styleUrls: ['./carrito-producto.component.css']
})
export class CarritoProductoComponent implements OnInit {

  @Input() objProductoCarrito: ProductoCarrito = {
    objProducto: {
      idProducto: 0,
      nombre: '',
      descripcion: '',
      lstProductoPrecio: [],
      objTipoProducto: {
        idTipoPedido: 0,
        nombre: '',
        activo: false
      },
      activo: false,
      imageURL: '',
    },
    cantidad: 0
  }

  constructor(
    private router: Router,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  btnEliminar_OnClick(idProducto: number): void{
    var items: { idProducto: number, cantidad: number}[] = [];
    items = JSON.parse(localStorage.getItem('cart') || '');
    items.splice(items.findIndex(x=>x.idProducto==idProducto),1);
    localStorage.setItem('cart', JSON.stringify(items));
    this.refresh_page();
  }

  refresh_page():void{
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate(['../../'], {
    //   relativeTo: this.route,
    // })
    this.router.navigate(['/comercial/carrito'])
  }
}
