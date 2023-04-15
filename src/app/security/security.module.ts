import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RecuperarComponent } from './recuperar/recuperar.component';



@NgModule({
  declarations: [
    LoginComponent,
    SecurityComponent,
    HeaderComponent,
    FooterComponent,
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
