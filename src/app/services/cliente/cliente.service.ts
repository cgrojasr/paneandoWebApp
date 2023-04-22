import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteAutenticar, ClienteLogin, } from 'src/app/models/Cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  Autenticar(cliente: ClienteAutenticar){
    return this.http.post<ClienteLogin>(`${environment.url}cliente`, cliente);
  }

  RegistrarCliente(){}

  ActualizarCliente(){}
}
