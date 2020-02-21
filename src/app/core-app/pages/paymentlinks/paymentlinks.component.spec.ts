import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentlinksComponent } from './paymentlinks.component';

describe('PaymentlinksComponent', () => {
  let component: PaymentlinksComponent;
  let fixture: ComponentFixture<PaymentlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
