import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhomeComponent } from './formhome.component';

describe('FormhomeComponent', () => {
  let component: FormhomeComponent;
  let fixture: ComponentFixture<FormhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
