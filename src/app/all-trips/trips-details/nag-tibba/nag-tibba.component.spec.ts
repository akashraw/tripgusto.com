import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagTibbaComponent } from './nag-tibba.component';

describe('NagTibbaComponent', () => {
  let component: NagTibbaComponent;
  let fixture: ComponentFixture<NagTibbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagTibbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NagTibbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
