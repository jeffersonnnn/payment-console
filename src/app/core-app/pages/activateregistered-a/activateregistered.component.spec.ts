import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateregisteredComponent } from './activateregistered.component';

describe('ActivateregisteredComponent', () => {
  let component: ActivateregisteredComponent;
  let fixture: ComponentFixture<ActivateregisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateregisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
