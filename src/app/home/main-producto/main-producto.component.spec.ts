import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductoComponent } from './main-producto.component';

describe('MainProductoComponent', () => {
  let component: MainProductoComponent;
  let fixture: ComponentFixture<MainProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
