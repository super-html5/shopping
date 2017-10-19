import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isSelected = false;

  constructor() {
  }

  ngOnInit() {
    $('.wrapper').navbarscroll();

    // $('#demo05').navbarscroll({
    //   defaultSelect: 6,
    //   endClickScroll: function (obj) {
    //     console.log(obj.text());
    //   }
    // });
  }

  onIsSelected(): void {
    this.isSelected = !this.isSelected;
  }

}
