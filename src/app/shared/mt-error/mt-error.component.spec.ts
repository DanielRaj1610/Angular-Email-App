import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtErrorComponent } from './mt-error.component';

describe('MtErrorComponent', () => {
  let component: MtErrorComponent;
  let fixture: ComponentFixture<MtErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
