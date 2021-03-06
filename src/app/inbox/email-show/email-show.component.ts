import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Email } from '../email';
// import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(private route: ActivatedRoute) {
    this.email = route.snapshot.data.email; //fallback option
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit(): void {


    //*solution with an resolver {has it's own defects}

    //   this.route.params
    //     .pipe(
    //       switchMap(({ id }) => {
    //         return this.emailService.getEmail(id);
    //       })
    //     )
    //     .subscribe((email) => {
    //       this.email = email;
    //     });
  }
}
