import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGirlsComponent } from './all-girls.component';

describe('AllGirlsComponent', () => {
  let component: AllGirlsComponent;
  let fixture: ComponentFixture<AllGirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGirlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
