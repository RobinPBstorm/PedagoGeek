import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTextarea } from './pg-textarea';

describe('PgTextarea', () => {
  let component: PgTextarea;
  let fixture: ComponentFixture<PgTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgTextarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
