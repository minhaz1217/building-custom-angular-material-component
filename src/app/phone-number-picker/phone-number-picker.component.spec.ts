import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberPickerComponent } from './phone-number-picker.component';

describe('PhoneNumberPickerComponent', () => {
  let component: PhoneNumberPickerComponent;
  let fixture: ComponentFixture<PhoneNumberPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneNumberPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneNumberPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
