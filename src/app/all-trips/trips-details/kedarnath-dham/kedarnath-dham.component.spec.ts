import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KedarnathDhamComponent } from './kedarnath-dham.component';

describe('KedarnathDhamComponent', () => {
  let component: KedarnathDhamComponent;
  let fixture: ComponentFixture<KedarnathDhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KedarnathDhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KedarnathDhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
