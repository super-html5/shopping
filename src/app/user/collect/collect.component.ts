import {Component, OnInit} from '@angular/core';
import {flyInOutX} from '../../currency-animations';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss'],
  animations: [flyInOutX]
})
export class CollectComponent implements OnInit {
  isGoods: boolean = true;

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('我的收藏');
  }

  changeContents(): void {
    this.isGoods = false;
  }

  changeGoods(): void {
    this.isGoods = true;
  }


}
