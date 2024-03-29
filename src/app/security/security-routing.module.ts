import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'  
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'recuperar',
        component: RecuperarComponent
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecurityRoutingModule { }
