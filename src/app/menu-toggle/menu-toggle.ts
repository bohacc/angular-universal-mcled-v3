import { isBrowser } from 'angular2-universal';

import { Directive, ElementRef, OnInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[menu-toggle]',
})

export class MenuToggle implements OnInit {
  constructor(private _elRef: ElementRef) {}

  ngOnInit() {
    if (isBrowser) {
      // MAIN MENU - OPEN/CLOSE JS
      // .shop_categories li .toggle
      $(this._elRef.nativeElement).each(function () {
        $(this).click(function () {
          $(this).parent().toggleClass('opened');
        });
      });
    }
  }
}
