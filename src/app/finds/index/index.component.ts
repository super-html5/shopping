import {Component, OnInit} from '@angular/core';
import {flyInOutX} from '../../currency-animations';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyInOutX]
})
export class IndexComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('发现');
  }

}
