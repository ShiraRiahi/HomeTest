import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-complaint-form',
  standalone: true, // הגדרה כרכיב עצמאי
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css']
})
export class ComplaintFormComponent {
  form: FormGroup;
  selectedType: string = 'false';


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inqType: ['request', Validators.required],
      salutation: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      mobilePhone: ['', [Validators.required, Validators.pattern(/^\\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onTypeChange(value: string): void {
    this.selectedType = value;
    console.log(`Selected type: ${value}`);
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    }
  }
}
