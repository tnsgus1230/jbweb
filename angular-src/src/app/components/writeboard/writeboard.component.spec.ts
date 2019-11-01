import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteboardComponent } from './writeboard.component';

describe('WriteboardComponent', () => {
  let component: WriteboardComponent;
  let fixture: ComponentFixture<WriteboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
