import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGenerosComponent } from './formulario-generos.component';

describe('FormularioGenerosComponent', () => {
  let component: FormularioGenerosComponent;
  let fixture: ComponentFixture<FormularioGenerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioGenerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
