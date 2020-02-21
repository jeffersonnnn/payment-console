import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatestarterComponent } from './activatestarter.component';

describe('ActivatestarterComponent', () => {
  let component: ActivatestarterComponent;
  let fixture: ComponentFixture<ActivatestarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatestarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatestarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
