import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mt-error',
  templateUrl: './mt-error.component.html',
  styleUrls: ['./mt-error.component.css'],
})
export class MtErrorComponent implements OnInit {
  
  @Input() error: string;

  constructor() {}

  ngOnInit(): void {}
}
