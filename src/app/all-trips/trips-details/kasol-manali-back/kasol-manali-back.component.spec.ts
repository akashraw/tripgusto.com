import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasolManaliBackComponent } from './kasol-manali-back.component';

describe('KasolManaliBackComponent', () => {
  let component: KasolManaliBackComponent;
  let fixture: ComponentFixture<KasolManaliBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasolManaliBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KasolManaliBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
