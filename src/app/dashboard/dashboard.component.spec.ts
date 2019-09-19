import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponetComponent } from './dashboard.component';

describe('DashboardComponetComponent', () => {
  let component: DashboardComponetComponent;
  let fixture: ComponentFixture<DashboardComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
