import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoptaChandrashillaWeekendComponent } from './chopta-chandrashilla-weekend.component';

describe('ChoptaChandrashillaWeekendComponent', () => {
  let component: ChoptaChandrashillaWeekendComponent;
  let fixture: ComponentFixture<ChoptaChandrashillaWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoptaChandrashillaWeekendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoptaChandrashillaWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
