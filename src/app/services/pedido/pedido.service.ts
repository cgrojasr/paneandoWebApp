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

  listarFiltros(nombre: string, descripcion: string, idTipoProducto: number): Observable<Producto[]>{
    if(nombre!= null && descripcion == null){
      return this.http.get<Producto[]>(`${environment.url}producto/filtro?nombre=${nombre}`)
    }

    if(nombre== null && descripcion!=null){
      return this.http.get<Producto[]>(`${environment.url}producto/filtro?descripcion=${descripcion}`)
    }

    if(nombre==null && descripcion==null && idTipoProducto !=0)
    {
      return this.http.get<Producto[]>(`${environment.url}producto/filtro?idTipoProducto=${idTipoProducto}`)
    }

    return this.http.get<Producto[]>(`${environment.url}producto`)
  }
}
