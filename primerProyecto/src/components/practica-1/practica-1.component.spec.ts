import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica1Component } from './practica-1.component';

describe('Practica1Component', () => {
  let component: Practica1Component;
  let fixture: ComponentFixture<Practica1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
