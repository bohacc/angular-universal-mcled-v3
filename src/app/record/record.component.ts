import { isBrowser } from 'angular2-universal';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { AppService } from '../app.service';

declare var $: any;

@Component({
  selector: 'record',
  templateUrl: 'record.template.html',
})

export class Record {
  product: Object = {};
  amount: string;
  appService: AppService;
  tabsState: number;
  tabsStateHover: number;

  constructor(private route: ActivatedRoute, private http: Http) {
    this.appService = AppService.getInstance();
  }

  ngOnInit() {
    if (isBrowser) {
      //TimerWrapper.setTimeout(function () {
      //$(require('../../../tools/js/jquery/ui/ui.js'));
      //noinspection TypeScriptUnresolvedFunction
      $(require('../../../tools/js/jquery/ui/ui.product.img.zoom.js'));
      //noinspection TypeScriptUnresolvedFunction
      $(require('../../../tools/js/jquery/ui/ui.product.img.previews.js'));
      //$(require('../../../tools/js/jquery/ui/ui.vertical.img.previews.js'));
      //noinspection TypeScriptUnresolvedFunction
      $(require('../../../tools/js/jquery/ui/ui.product.img.lightbox.js'));
      //$(require('../../../tools/js/jquery/ui/ui.product.configurator.js'));
      //$(require('../../../tools/js/jquery/slideshow/jquery.slides.min'));
      //}, 500);
    }
    this.tabsState = 1;
    this.amount = '1';
    this.getRecord();
  }

  getRecord() {
    this.http.get(this.appService.getRootPath() + '/products/' + this.appService.getPath())
      .subscribe(res => {
        let data = res.json();
        this.product = data;
      });
  }

  public minus() {
    if (parseInt(this.amount, 10) === 1) {
      this.amount = '1';
    } else {
      this.amount = String(parseInt(this.amount, 10) - 1);
    }
  }

  public plus() {
    this.amount = String(parseInt(this.amount, 10) + 1);
  }

  public setTabState(index) {
    this.tabsState = index;
  }

  public setHover(index) {
    this.tabsStateHover = index;
  }
}
