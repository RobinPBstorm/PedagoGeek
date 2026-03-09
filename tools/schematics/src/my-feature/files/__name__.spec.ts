import { ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %> } from './<%= dasherize(name) %>';

describe('MyFeature', () => {
  let component: <%= classify(name) %>;
  let fixture: ComponentFixture<<%= classify(name) %>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [<%= classify(name) %>]
    })
    .compileComponents();

    fixture = TestBed.createComponent(<%= classify(name) %>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
