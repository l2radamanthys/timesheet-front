import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSemanaComponent } from './form-semana.component';

describe('FormSemanaComponent', () => {
  let component: FormSemanaComponent;
  let fixture: ComponentFixture<FormSemanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSemanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
