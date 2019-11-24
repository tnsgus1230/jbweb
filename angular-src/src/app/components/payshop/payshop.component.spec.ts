import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayshopComponent } from './payshop.component';

describe('PayshopComponent', () => {
  let component: PayshopComponent;
  let fixture: ComponentFixture<PayshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
