import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { first } from 'rxjs';
import { ClienteAutenticar, ClienteLogin} from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objClienteAutenticar: ClienteAutenticar = {
    email: '',
    password: ''
  };
  sesion: Boolean = false;

  objClienteLogin: ClienteLogin = {
    nombres: '',
    apellidos: '',
    email: '',
    id_cliente: 0,
    sesion: false
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService,
    private cookies: CookieService
  ) { }

  ngOnInit(): void {
    if(this.cookies.get('clienteAuth') !== ''){
      this.objClienteLogin = JSON.parse(this.cookies.get('clienteAuth'));
      if(this.objClienteLogin.sesion){
        this.router.navigateByUrl("home");
      }
    } else {
      localStorage.clear();
    }
  }

  btnIngresar_OnClick(): void {
    this.clienteService.Autenticar(this.objClienteAutenticar).subscribe(
      result => {
        if(result.email === this.objClienteAutenticar.email){
          result.sesion = this.sesion;
          if(this.sesion == true){
            let date: Date = new Date();
            this.cookies.set('clienteAuth', JSON.stringify(result), date.getTime()+ 1 * 24 * 60 * 60 * 1000);
          }
          this.router.navigateByUrl("home");
        }
        else{
          this.router.navigateByUrl("security/recuperar");
        }
      },
      error => {
        this.router.navigateByUrl("security/recuperar");
      }
    );
  }

  btnRecuperar_OnClick(): void{
    this.router.navigateByUrl("security/recuperar");
  }
}
