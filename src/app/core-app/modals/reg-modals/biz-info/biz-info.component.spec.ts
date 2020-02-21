import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizInfoComponent } from './biz-info.component';

describe('BizInfoComponent', () => {
  let component: BizInfoComponent;
  let fixture: ComponentFixture<BizInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
