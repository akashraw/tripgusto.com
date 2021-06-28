import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDhamComponent } from './char-dham.component';

describe('CharDhamComponent', () => {
  let component: CharDhamComponent;
  let fixture: ComponentFixture<CharDhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
