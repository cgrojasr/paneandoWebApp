import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  items: { idProducto: number, cantidad: number}[] = [];
  item = {idProducto: 0, cantidad: 0};

  idProducto: number = 0;
  cantidad: number = 0;

  constructor(
    private route: ActivatedRoute
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

    if(this.item.idProducto != 0){
      this.items.push(this.item);
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }
}
