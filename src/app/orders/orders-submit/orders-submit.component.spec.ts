import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSubmitComponent } from './orders-submit.component';

describe('OrdersSubmitComponent', () => {
  let component: OrdersSubmitComponent;
  let fixture: ComponentFixture<OrdersSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
