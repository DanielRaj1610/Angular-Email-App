import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mt-input',
  templateUrl: './mt-input.component.html',
  styleUrls: ['./mt-input.component.css'],
})
export class MtInputComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() inputType: string;
  @Input() hint: string;
  @Input() hintAlign: string = 'end';
  @Input() suffixIcon: string;
  @Input() appearance: string;
  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.control;
    const res = dirty && touched && errors;
    return res;
  }
}
