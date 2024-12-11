import { Component } from '@angular/core';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComplaintFormComponent],
  template: '<app-complaint-form></app-complaint-form>',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
