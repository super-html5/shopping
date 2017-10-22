import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {flyInOut} from '../../currency-animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [flyInOut]
})
export class SearchComponent implements OnInit {

  _show = false;

  @ViewChild('search') _search: ElementRef;

  constructor(private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      this._show = true;
    }, 500);
    this._autoFocus();
  }

  _autoFocus(): void {
    const isAutoFocus = this._search;
    if (isAutoFocus.nativeElement.autofocus !== true) {
      isAutoFocus.nativeElement.focus();
    }
  }

  _routerIndexCom(): void {
    this.router.navigate(['/index']);
  }
}
