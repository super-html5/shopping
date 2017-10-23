import { Component, OnInit } from '@angular/core';
import {flyInOutX} from '../../currency-animations';

@Component({
  selector: 'app-orders-submit',
  templateUrl: './orders-submit.component.html',
  styleUrls: ['./orders-submit.component.scss'],
  animations: [flyInOutX]
})
export class OrdersSubmitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
