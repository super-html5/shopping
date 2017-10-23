import {Component, OnInit} from '@angular/core';
import {flyInOut, flyInOutX} from '../../currency-animations';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [flyInOut, flyInOutX]
})
export class IndexComponent implements OnInit {

  isSelected = false;

  constructor(private router: Router,
              private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('太白优选商城');
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

  routeSearchCom(): void {
    this.router.navigate(['/search']);
  }

}
