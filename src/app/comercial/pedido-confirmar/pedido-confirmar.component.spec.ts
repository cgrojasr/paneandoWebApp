import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoConfirmarComponent } from './pedido-confirmar.component';

describe('PedidoConfirmarComponent', () => {
  let component: PedidoConfirmarComponent;
  let fixture: ComponentFixture<PedidoConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoConfirmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
