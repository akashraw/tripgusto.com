import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KedarkanthaTrekComponent } from './kedarkantha-trek.component';

describe('KedarkanthaTrekComponent', () => {
  let component: KedarkanthaTrekComponent;
  let fixture: ComponentFixture<KedarkanthaTrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KedarkanthaTrekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KedarkanthaTrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
