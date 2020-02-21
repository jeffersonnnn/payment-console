import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpAccountComponent } from './corp-account.component';

describe('CorpAccountComponent', () => {
  let component: CorpAccountComponent;
  let fixture: ComponentFixture<CorpAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
