import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainProductoComponent } from './main-producto/main-producto.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    MainProductoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }