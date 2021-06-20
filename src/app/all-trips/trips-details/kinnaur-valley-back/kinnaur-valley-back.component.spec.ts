import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinnaurValleyBackComponent } from './kinnaur-valley-back.component';

describe('KinnaurValleyBackComponent', () => {
  let component: KinnaurValleyBackComponent;
  let fixture: ComponentFixture<KinnaurValleyBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinnaurValleyBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinnaurValleyBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
