import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'security',
    pathMatch: 'full'
  },
  {
    path: 'security',
    loadChildren: ()=>import('./security/security.module').then(m=>m.SecurityModule)
  },
  {
    path: 'home',
    loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'comercial',
    loadChildren: ()=>import('./comercial/comercial.module').then(m=>m.ComercialModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
