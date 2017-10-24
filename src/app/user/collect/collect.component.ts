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
  isMove: boolean = false;
  startX: number;
  moveX: number;

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('我的收藏');
    document.addEventListener('click', () => {
      this.isMove = false;
    });
  }

  touchStart(evt): void {
    this.startX = evt.targetTouches[0].clientX;
  }

  touchmove(evt): void {
    this.moveX = evt.targetTouches[0].clientX - this.startX;
    if (Math.abs(this.moveX) > 30) {
      this.isMove = true;
    }
  }

}
