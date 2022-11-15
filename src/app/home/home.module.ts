import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainProductoComponent } from './main-producto/main-producto.component';
import { DemoComponent } from './demo/demo.component'


@NgModule({
  declarations: [
    MainComponent,
    MainProductoComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }