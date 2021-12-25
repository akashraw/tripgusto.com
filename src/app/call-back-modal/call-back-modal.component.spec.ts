import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBackModalComponent } from './call-back-modal.component';

describe('CallBackModalComponent', () => {
  let component: CallBackModalComponent;
  let fixture: ComponentFixture<CallBackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallBackModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
