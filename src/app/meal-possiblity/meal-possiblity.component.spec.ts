import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPossiblityComponent } from './meal-possiblity.component';

describe('CartComponent', () => {
  let component: MealPossiblityComponent;
  let fixture: ComponentFixture<MealPossiblityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPossiblityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPossiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
