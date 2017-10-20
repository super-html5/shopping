import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersConfirmComponent } from './orders-confirm.component';

describe('OrdersConfirmComponent', () => {
  let component: OrdersConfirmComponent;
  let fixture: ComponentFixture<OrdersConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
