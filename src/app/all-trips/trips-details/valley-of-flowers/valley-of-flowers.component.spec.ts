import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValleyOfFlowersComponent } from './valley-of-flowers.component';

describe('ValleyOfFlowersComponent', () => {
  let component: ValleyOfFlowersComponent;
  let fixture: ComponentFixture<ValleyOfFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValleyOfFlowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValleyOfFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
