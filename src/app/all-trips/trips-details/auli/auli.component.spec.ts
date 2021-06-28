import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuliComponent } from './auli.component';

describe('AuliComponent', () => {
  let component: AuliComponent;
  let fixture: ComponentFixture<AuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
