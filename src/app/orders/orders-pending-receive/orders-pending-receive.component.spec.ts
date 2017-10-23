import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPendingReceiveComponent } from './orders-pending-receive.component';

describe('OrdersPendingReceiveComponent', () => {
  let component: OrdersPendingReceiveComponent;
  let fixture: ComponentFixture<OrdersPendingReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPendingReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPendingReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
