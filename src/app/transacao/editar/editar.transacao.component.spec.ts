import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTransacaoComponent } from './editar.transacao.component';

describe('EditarComponent', () => {
  let component: EditarTransacaoComponent;
  let fixture: ComponentFixture<EditarTransacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTransacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
