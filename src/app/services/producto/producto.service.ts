import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

  listarPorFiltros(nombre: string):Observable<Producto[]>{
    return this.http.get<Producto[]>(`${environment.url}produto?nombre=${nombre}}&idTipoProducto=1`);
  }
}
