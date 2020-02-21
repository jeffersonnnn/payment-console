import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatestarterBComponent } from './activatestarter-b.component';

describe('ActivatestarterBComponent', () => {
  let component: ActivatestarterBComponent;
  let fixture: ComponentFixture<ActivatestarterBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatestarterBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatestarterBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
