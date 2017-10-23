import {Component, OnInit} from '@angular/core';
import {flyInOutX} from '../../currency-animations';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-orders-submit',
  templateUrl: './orders-submit.component.html',
  styleUrls: ['./orders-submit.component.scss'],
  animations: [flyInOutX]
})
export class OrdersSubmitComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('确认订单');
  }

}
