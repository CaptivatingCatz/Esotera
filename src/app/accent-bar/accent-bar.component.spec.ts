import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccentBarComponent } from './accent-bar.component';

describe('AccentBarComponent', () => {
  let component: AccentBarComponent;
  let fixture: ComponentFixture<AccentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccentBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
