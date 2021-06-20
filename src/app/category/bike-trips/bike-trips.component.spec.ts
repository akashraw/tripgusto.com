import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeTripsComponent } from './bike-trips.component';

describe('BikeTripsComponent', () => {
  let component: BikeTripsComponent;
  let fixture: ComponentFixture<BikeTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
