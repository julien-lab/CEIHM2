import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouletTeriyaki } from './ratatouille.component';

describe('RecetteComponent', () => {
  let component: PouletTeriyaki;
  let fixture: ComponentFixture<PouletTeriyaki>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PouletTeriyaki ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PouletTeriyaki);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
