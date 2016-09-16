import { isBrowser } from 'angular2-universal';

import { Directive, ElementRef, OnInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[slides]',
})
export class SlidesComponent implements OnInit {
  constructor(private _elRef: ElementRef) {}

  ngOnInit() {
    if (1==1) {
      //console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
      //carousel($);
      //$(this._elRef.nativeElement).hide();
      //$(this._elRef.nativeElement).dialog({autoOpen:true});
      //$(this._elRef.nativeElement)..autocomplete();

      /*$(this._elRef.nativeElement).slick({
       dots: true,
       autoplay: true,
       autoplaySpeed: 8000,
       mobileFirst: true,
       });*/

      /*$.fn.slidesjs = function () {
        require('D:/notia/app/web/code/angular2-test/tools/js/jquery/slideshow/jquery.slides.js');
      }*/
      //require('D:/notia/app/web/code/angular2-test/tools/js/jquery/slideshow/jquery.slides.js');
      //console.log($.slidesjs);

      //noinspection TypeScriptUnresolvedFunction
      $(require('../../../tools/js/jquery/slideshow/jquery.slides.js'));
      //$(require('D:/notia/app/web/code/angular2-test/tools/js/jquery/carousel/slick.js'));

      $(this._elRef.nativeElement).slidesjs({
        width: "100%",
        height: "100%",
        play: {
          active: true,
          effect: "fade",
          interval: 7000,
          auto: true,
          swap: false,
          pauseOnHover: false,
          restartDelay: 7000
        },

        menu_titles: {
          active: true
        }
      });
    }
  }
}
