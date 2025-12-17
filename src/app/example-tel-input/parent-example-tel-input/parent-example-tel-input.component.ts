import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ExampleTelInputComponent } from '../example-tel-input.component';

@Component({
  selector: 'app-parent-example-tel-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    forwardRef(() => ExampleTelInputComponent),
    MatIconModule,
    AsyncPipe,
    JsonPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './parent-example-tel-input.component.html',
  styleUrl: './parent-example-tel-input.component.scss',
})
export class ParentExampleTelInputComponent {
  readonly form = new FormGroup({
    tel: new FormControl(null),
  });
}
