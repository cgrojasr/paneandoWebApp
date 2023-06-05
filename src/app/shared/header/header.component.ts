import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cookies: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  btnCerrar_OnClick(){
    this.cookies.delete('clienteAuth','/');
    localStorage.clear();
    this.router.navigateByUrl("security");
  }
}
