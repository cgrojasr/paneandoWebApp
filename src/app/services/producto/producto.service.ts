import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, ProductoCatalogo } from 'src/app/models/Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

  listarPorFiltros(nombre: string, descripcion: string, idTipoProducto: number): Observable<Producto[]>{
    if(nombre!= null && descripcion == null){
      return this.http.get<Producto[]>(`${environment.url}producto/filtro?nombre=${nombre}`)
    }

    if(nombre== null && descripcion!=null){
      return this.http.get<Producto[]>(`${environment.url}producto/filtro?descripcion=${descripcion}`)
    }

    if(nombre=="" && descripcion=="" && idTipoProducto !=0)
    {
      return this.http.get<Producto[]>(`${environment.url}producto/filtro?idTipoProducto=${idTipoProducto}`)
    }

    return this.http.get<Producto[]>(`${environment.url}producto`)
  }

  listarPorIdProductos(strIdProductos: string):Observable<ProductoCatalogo[]>{
    return this.http.get<ProductoCatalogo[]>(`${environment.url}producto/ListarPorIds?strIdProductos=${strIdProductos}`)
  }

  catalogoDisponible(texto: String): Observable<ProductoCatalogo[]>{
    return this.http.get<ProductoCatalogo[]>(`${environment.url}producto?texto=${texto}`)
  }
}
