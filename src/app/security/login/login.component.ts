import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioAutenticar } from 'src/app/models/UsuarioAutenticar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objUsuarioAutenticar: UsuarioAutenticar = {
    usuario: '',
    password: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  btnIngresar_OnClick(): void {
    if(this.objUsuarioAutenticar.usuario == "" && this.objUsuarioAutenticar.password == ""){
      this.router.navigateByUrl("home");
    }
  }

  btnRecuperar_OnClick(): void{
    this.router.navigateByUrl("security/recuperar");
  }

}
