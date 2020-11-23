import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { MtInputComponent } from './mt-input/mt-input.component';
import { MaterialModule } from '../material/material.module';
import { MtErrorComponent } from './mt-error/mt-error.component';
import { MtPasswordComponent } from './mt-password/mt-password.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    InputComponent,
    MtInputComponent,
    MtErrorComponent,
    MtPasswordComponent,
    ModalComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    InputComponent,
    MtInputComponent,
    MtErrorComponent,
    MtPasswordComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
