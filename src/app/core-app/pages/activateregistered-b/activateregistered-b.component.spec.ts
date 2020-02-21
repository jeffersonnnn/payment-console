import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateregisteredBComponent } from './activateregistered-b.component';

describe('ActivateregisteredBComponent', () => {
  let component: ActivateregisteredBComponent;
  let fixture: ComponentFixture<ActivateregisteredBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateregisteredBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateregisteredBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
