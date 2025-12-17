import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentExampleTelInputComponent } from './parent-example-tel-input.component';

describe('ParentExampleTelInputComponent', () => {
  let component: ParentExampleTelInputComponent;
  let fixture: ComponentFixture<ParentExampleTelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentExampleTelInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentExampleTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
