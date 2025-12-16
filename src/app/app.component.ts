import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhoneNumberPickerComponent } from './phone-number-picker/phone-number-picker.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormFieldCustomControlExample } from './example-tel-input/example-tel-input.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PhoneNumberPickerComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    FormFieldCustomControlExample,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'building-custom-angular-material-component';
  readonly form = new FormGroup({
    tel: new FormControl(null),
  });
}
