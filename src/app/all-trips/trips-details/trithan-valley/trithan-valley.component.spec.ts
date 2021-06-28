import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrithanValleyComponent } from './trithan-valley.component';

describe('TrithanValleyComponent', () => {
  let component: TrithanValleyComponent;
  let fixture: ComponentFixture<TrithanValleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrithanValleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrithanValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
