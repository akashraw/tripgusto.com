import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarKiDunTrekComponent } from './har-ki-dun-trek.component';

describe('HarKiDunTrekComponent', () => {
  let component: HarKiDunTrekComponent;
  let fixture: ComponentFixture<HarKiDunTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarKiDunTrekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarKiDunTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
