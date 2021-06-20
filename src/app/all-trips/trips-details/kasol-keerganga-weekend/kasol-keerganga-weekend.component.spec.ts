import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasolKeergangaWeekendComponent } from './kasol-keerganga-weekend.component';

describe('KasolKeergangaWeekendComponent', () => {
  let component: KasolKeergangaWeekendComponent;
  let fixture: ComponentFixture<KasolKeergangaWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasolKeergangaWeekendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KasolKeergangaWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
