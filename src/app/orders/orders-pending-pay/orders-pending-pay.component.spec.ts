import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPendingPayComponent } from './orders-pending-pay.component';

describe('OrdersPendingPayComponent', () => {
  let component: OrdersPendingPayComponent;
  let fixture: ComponentFixture<OrdersPendingPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPendingPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPendingPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
