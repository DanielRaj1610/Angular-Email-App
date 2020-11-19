import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  //* Alternate approach to subscribe to the change in value

  // ngOnInit(): void {
  //   this.authService.signedin$.subscribe((signedin) => {
  //     this.signedin = signedin;
  //   });
  // }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe();
    // setTimeout(() => { // for testing sign out
    // this.authService.signout().subscribe(() => {});
    // }, 5000);
  }
}
