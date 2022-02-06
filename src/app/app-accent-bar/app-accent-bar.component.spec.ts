import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAccentBarComponent } from './app-accent-bar.component';

describe('AppAccentBarComponent', () => {
  let component: AppAccentBarComponent;
  let fixture: ComponentFixture<AppAccentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAccentBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
