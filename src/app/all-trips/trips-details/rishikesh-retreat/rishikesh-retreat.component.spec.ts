import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RishikeshRetreatComponent } from './rishikesh-retreat.component';

describe('RishikeshRetreatComponent', () => {
  let component: RishikeshRetreatComponent;
  let fixture: ComponentFixture<RishikeshRetreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RishikeshRetreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RishikeshRetreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
