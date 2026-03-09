import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudocodeTheorie } from './pseudocode-theorie';

describe('PseudocodeTheorie', () => {
  let component: PseudocodeTheorie;
  let fixture: ComponentFixture<PseudocodeTheorie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PseudocodeTheorie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PseudocodeTheorie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
