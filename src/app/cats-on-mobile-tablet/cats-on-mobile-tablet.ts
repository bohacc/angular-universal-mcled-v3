import { isBrowser } from 'angular2-universal';

import { Directive, ElementRef, OnInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[cats-on-mobile-tablet]',
})

export class CatsOnMobileTablet implements OnInit {
  constructor(private _elRef: ElementRef) {}

  ngOnInit() {
    if (isBrowser) {
      // OPEN/HIDE ALL CATS ON MOBILE/TABLET
      // .shop_categories > h2
      $(this._elRef.nativeElement).click(function () {
        $(this).parent().toggleClass('opened');
      });
    }
  }
}
