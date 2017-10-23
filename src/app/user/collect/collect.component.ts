import {Component, OnInit} from '@angular/core';
import {flyInOutX} from '../../currency-animations';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss'],
  animations: [flyInOutX]
})
export class CollectComponent implements OnInit {
  isGoods: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  changeContents(): void {
    this.isGoods = false;
  }

  changeGoods(): void {
    this.isGoods = true;
  }
}
