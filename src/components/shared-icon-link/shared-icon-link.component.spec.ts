import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedIconLinkComponent } from './shared-icon-link.component';

describe('SharedIconLinkComponent', () => {
  let component: SharedIconLinkComponent;
  let fixture: ComponentFixture<SharedIconLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedIconLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedIconLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
