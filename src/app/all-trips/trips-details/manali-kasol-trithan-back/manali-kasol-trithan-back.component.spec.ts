import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaliKasolTrithanBackComponent } from './manali-kasol-trithan-back.component';

describe('ManaliKasolTrithanBackComponent', () => {
  let component: ManaliKasolTrithanBackComponent;
  let fixture: ComponentFixture<ManaliKasolTrithanBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManaliKasolTrithanBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManaliKasolTrithanBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
