import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersPendingDeliverComponent } from './orders-pending-deliver.component';

describe('OrdersPendingDeliverComponent', () => {
  let component: OrdersPendingDeliverComponent;
  let fixture: ComponentFixture<OrdersPendingDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersPendingDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersPendingDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
