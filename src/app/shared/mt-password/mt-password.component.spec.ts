import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtPasswordComponent } from './mt-password.component';

describe('MtPasswordComponent', () => {
  let component: MtPasswordComponent;
  let fixture: ComponentFixture<MtPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
