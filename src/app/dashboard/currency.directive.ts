import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective implements OnInit {

  @Input('appCurrency') className: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.addStyleClass(this.className);
  }

  private addStyleClass(className: string): void {
    this.el.nativeElement.classList.add(className);
  }
}
