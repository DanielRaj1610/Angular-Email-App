import { Component } from '@angular/core';
import { MtInputComponent } from '../mt-input/mt-input.component';

@Component({
  selector: 'app-mt-password',
  templateUrl: './mt-password.component.html',
  styleUrls: ['./mt-password.component.css'],
})
export class MtPasswordComponent extends MtInputComponent {
  hide = true;
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
