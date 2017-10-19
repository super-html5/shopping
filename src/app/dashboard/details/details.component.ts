import {Component, OnInit} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateY(100%)'}))
      ])
    ])
  ]

})
export class DetailsComponent implements OnInit {

  _AuthStyleClassName: string;
  goodsNumbers = 1;
  isPlaceOrder = false;

  constructor() {
  }

  ngOnInit() {
    this.isCollectionGoods();
  }

  /**
   * 展示购买卡片
   */
  placeGoodsCard(): void {
    this.isPlaceOrder = true;
  }

  /**
   * 点击黑色遮罩关闭购买卡片
   */
  hiddenGoodsCard(): void {
    this.isPlaceOrder = false;
  }

  /**
   * 加数量
   */
  goodsNumPlus(): void {
    this.goodsNumbers += 1;
  }

  /**
   * 减数量
   */
  goodsNumMinus(): void {
    if (this.goodsNumbers === 1) {
      return;
    }
    this.goodsNumbers -= 1;
  }

  /**
   * 收藏商品
   */
  isCollectionGoods(): void {
    this._AuthStyleClassName = 'text-danger';
  }
}
