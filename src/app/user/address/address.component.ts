import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('新增收货地址');
  }

}
