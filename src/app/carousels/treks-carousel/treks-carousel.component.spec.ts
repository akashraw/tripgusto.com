import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreksCarouselComponent } from './treks-carousel.component';

describe('TreksCarouselComponent', () => {
  let component: TreksCarouselComponent;
  let fixture: ComponentFixture<TreksCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreksCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreksCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
