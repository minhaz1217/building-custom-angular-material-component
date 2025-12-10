import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

class MyTel {
  constructor(
    public area: string,
    public exchange: string,
    public subscriber: string
  ) {}
}

@Component({
  selector: 'app-phone-number-picker',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './phone-number-picker.component.html',
  styleUrl: './phone-number-picker.component.css',
})
export class PhoneNumberPickerComponent {
  parts: FormGroup;

  @Input()
  get value(): MyTel | null {
    let n = this.parts.value;
    if (
      n.area.length == 3 &&
      n.exchange.length == 3 &&
      n.subscriber.length == 4
    ) {
      return new MyTel(n.area, n.exchange, n.subscriber);
    }
    return null;
  }
  set value(tel: MyTel | null) {
    tel = tel || new MyTel('', '', '');
    this.parts.setValue({
      area: tel.area,
      exchange: tel.exchange,
      subscriber: tel.subscriber,
    });
  }

  constructor(fb: FormBuilder) {
    this.parts = fb.group({
      area: '',
      exchange: '',
      subscriber: '',
    });
  }
}
