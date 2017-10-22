import {Component, OnInit} from '@angular/core';
import {flyInOutX} from '../../currency-animations';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyInOutX]
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
