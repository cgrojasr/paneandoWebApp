import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
  }

  btnIngresar_OnClick(): void {
    this.clienteService.Autenticar(this.objClienteAutenticar).subscribe(
      result => {
        if(result.email == this.objClienteAutenticar.email){
          this.router.navigateByUrl("home");
        }
        else{
          this.router.navigateByUrl("security/recuperar");
        }
      },
      error => {
        console.log(error.status)
        this.router.navigateByUrl("security/recuperar");
      }
    );
  }

  btnRecuperar_OnClick(): void{
    this.router.navigateByUrl("security/recuperar");
  }
}
