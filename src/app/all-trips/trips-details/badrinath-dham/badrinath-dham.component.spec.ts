import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadrinathDhamComponent } from './badrinath-dham.component';

describe('BadrinathDhamComponent', () => {
  let component: BadrinathDhamComponent;
  let fixture: ComponentFixture<BadrinathDhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadrinathDhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadrinathDhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
