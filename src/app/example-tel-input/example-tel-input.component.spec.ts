import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTelInputComponent } from './example-tel-input.component';

describe('ExampleTelInputComponent', () => {
  let component: ExampleTelInputComponent;
  let fixture: ComponentFixture<ExampleTelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleTelInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
