import {Component, OnInit} from '@angular/core';
import {flyInOutX} from '../../currency-animations';
import {Router} from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyInOutX]
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  linkToCollect(): void {
    this.router.navigate(['/user/collect']);
  }
  linkToAddress(): void {
    this.router.navigate(['/user/address']);
  }
}
