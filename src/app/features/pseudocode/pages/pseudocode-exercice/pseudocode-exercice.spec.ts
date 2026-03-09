import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudocodeExercice } from './pseudocode-exercice';

describe('PseudocodeExercice', () => {
  let component: PseudocodeExercice;
  let fixture: ComponentFixture<PseudocodeExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PseudocodeExercice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PseudocodeExercice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
