import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  signal,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  AbstractControlDirective,
  NgControl,
} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

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
export class PhoneNumberPickerComponent
  implements MatFormFieldControl<MyTel>, OnDestroy
{
  private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

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

    this.stateChanges.next();
  }

  constructor(fb: FormBuilder) {
    this.parts = fb.group({
      area: '',
      exchange: '',
      subscriber: '',
    });
  }

  stateChanges: Subject<void> = new Subject<void>();

  static nextId = 0;
  @HostBinding()
  id = `example-tel-input-${PhoneNumberPickerComponent.nextId++}`;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  private _placeholder: string = '';

  ngControl: NgControl | AbstractControlDirective | null = null;
  focused: boolean = false;

  touched: boolean = false;
  onTouched = () => {};
  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (
      !this._elementRef.nativeElement.contains(event.relatedTarget as Element)
    ) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  get empty(): boolean {
    let n = this.parts.value;
    return !n.area && !n.exchange && !n.subscriber;
  }

  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(req: BooleanInput) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  get errorState(): boolean {
    return this.parts.invalid && this.touched;
  }
  controlType?: string | undefined = 'example-tel-input';
  autofilled?: boolean | undefined;
  @Input('aria-describedby') userAriaDescribedBy?: string | undefined;
  disableAutomaticLabeling?: boolean | undefined;
  setDescribedByIds(ids: string[]): void {
    const controlElement = this._elementRef.nativeElement.querySelector(
      '.example-tel-input-container'
    )!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }
  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this._elementRef.nativeElement.querySelector('input')?.focus();
    }
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}
