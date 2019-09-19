import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSistemaComponent } from './editar.sistema.component';

describe('Editar.SistemaComponent', () => {
  let component: EditarSistemaComponent;
  let fixture: ComponentFixture<EditarSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
