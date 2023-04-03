import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactushomeComponent } from './contactushome.component';

describe('ContactushomeComponent', () => {
  let component: ContactushomeComponent;
  let fixture: ComponentFixture<ContactushomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactushomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactushomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
