import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {flyInOutX} from '../../currency-animations';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyInOutX]
})
export class IndexComponent implements OnInit {
  goodsNumbers = 1;
  showNum: boolean = false;
  changeNumStatus: string = '编辑';

  constructor(private router: Router,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('购物车');
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
    if (this.goodsNumbers === 1
    ) {
      return;
    }
    this.goodsNumbers -= 1;
  }

  changeNum(): void {
    if (!this.showNum) {
      this.showNum = true;
      this.changeNumStatus = '完成';
    } else {
      this.showNum = false;
      this.changeNumStatus = '编辑';
    }
  }

  linkToSubmit(): void {
    this.router.navigate(['/orders/submit']);
  }
}
