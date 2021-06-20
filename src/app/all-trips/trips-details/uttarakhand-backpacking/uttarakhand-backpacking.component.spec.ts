import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarakhandBackpackingComponent } from './uttarakhand-backpacking.component';

describe('UttarakhandBackpackingComponent', () => {
  let component: UttarakhandBackpackingComponent;
  let fixture: ComponentFixture<UttarakhandBackpackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UttarakhandBackpackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarakhandBackpackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
