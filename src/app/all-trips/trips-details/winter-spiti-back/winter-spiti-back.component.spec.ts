import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterSpitiBackComponent } from './winter-spiti-back.component';

describe('WinterSpitiBackComponent', () => {
  let component: WinterSpitiBackComponent;
  let fixture: ComponentFixture<WinterSpitiBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterSpitiBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterSpitiBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
