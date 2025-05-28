import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxComponentComponent } from './color-box-component.component';

describe('ColorBoxComponentComponent', () => {
  let component: ColorBoxComponentComponent;
  let fixture: ComponentFixture<ColorBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBoxComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
