import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertButtonComponentComponent } from './alert-button-component.component';

describe('AlertButtonComponentComponent', () => {
  let component: AlertButtonComponentComponent;
  let fixture: ComponentFixture<AlertButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertButtonComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
