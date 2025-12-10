import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhoneNumberPickerComponent } from "./phone-number-picker/phone-number-picker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhoneNumberPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'building-custom-angular-material-component';
}
