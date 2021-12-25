import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpackingCarouselComponent } from './backpacking-carousel.component';

describe('BackpackingCarouselComponent', () => {
  let component: BackpackingCarouselComponent;
  let fixture: ComponentFixture<BackpackingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackpackingCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpackingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
