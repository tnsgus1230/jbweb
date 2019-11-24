import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundinfoComponent } from './refundinfo.component';

describe('RefundinfoComponent', () => {
  let component: RefundinfoComponent;
  let fixture: ComponentFixture<RefundinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
