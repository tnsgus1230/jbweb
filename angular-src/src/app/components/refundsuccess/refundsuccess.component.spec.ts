import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsuccessComponent } from './refundsuccess.component';

describe('RefundsuccessComponent', () => {
  let component: RefundsuccessComponent;
  let fixture: ComponentFixture<RefundsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
