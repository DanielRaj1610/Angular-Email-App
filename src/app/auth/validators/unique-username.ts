import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private auth: AuthService) {}
  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> => {
    const { value } = control;

    return this.auth.usernameAvailable(value).pipe(
      map((value) => {
        if (value.available) {
          return null;
        }
      }),
      catchError((err) => {
        console.log(err);
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        }
        return of({ noConnection: true });
      })
    );
  };
  // registerOnValidatorChange?(fn: () => void): void {
  //     throw new Error('Method not implemented.');
  // }
}
