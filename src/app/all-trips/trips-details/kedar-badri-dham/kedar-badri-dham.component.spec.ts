import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KedarBadriDhamComponent } from './kedar-badri-dham.component';

describe('KedarBadriDhamComponent', () => {
  let component: KedarBadriDhamComponent;
  let fixture: ComponentFixture<KedarBadriDhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KedarBadriDhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KedarBadriDhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
