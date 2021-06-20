import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilgrimComponent } from './pilgrim.component';

describe('PilgrimComponent', () => {
  let component: PilgrimComponent;
  let fixture: ComponentFixture<PilgrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilgrimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilgrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
