import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendCarouselComponent } from './weekend-carousel.component';

describe('WeekendCarouselComponent', () => {
  let component: WeekendCarouselComponent;
  let fixture: ComponentFixture<WeekendCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekendCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekendCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
