import { Component, OnInit } from '@angular/core';
import {flyInOutX} from '../../currency-animations';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  animations: [flyInOutX]
})
export class SubmitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
