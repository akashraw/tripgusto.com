import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvatiValleyComponent } from './parvati-valley.component';

describe('ParvatiValleyComponent', () => {
  let component: ParvatiValleyComponent;
  let fixture: ComponentFixture<ParvatiValleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvatiValleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParvatiValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
