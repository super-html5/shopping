import {Component, OnInit} from '@angular/core';
import {flyInOutX} from '../../currency-animations';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyInOutX]
})
export class IndexComponent implements OnInit {

  constructor(private router: Router,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('我的');
  }

  linkToCollect(): void {
    this.router.navigate(['/user/collect']);
  }

  linkToAddress(): void {
    this.router.navigate(['/user/address']);
  }
}
