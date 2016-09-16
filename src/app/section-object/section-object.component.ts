import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

import { Test } from '../test/test.component';
import { PageHeader } from '../page-header/page-header.component';
import { ShopCategories } from "../shop-categories/shop-categories.component";
import { SlidesObj } from "../slides-obj/slides-obj.component";

@Component({
  selector: 'section-object',
  template:
    '<dcl-wrapper *ngIf="isComponentType==2" [type]="obj" [html]="html"></dcl-wrapper> ' +
    '<dcl-wrapper-other *ngIf="isComponentType==1" [html]="html"></dcl-wrapper-other>'
})

export class SectionObject {
  @Input() src: string;
  @Input('object-id')
  private objectID: string;
  @Input('object-type')
  private objectType: number;
  @Input('pos')
  private pos: number;
  html = 'loading...';
  self = this;
  obj: any = Test;
  isComponentType: number = 0;

  constructor(private http: Http) {
  }

  ngOnInit() {
    if (!this.src) return;

    if (this.objectType == 1 &&
      this.objectID !== '6371'
      && this.objectID !== '6370'
      && this.objectID !== '6376'
      && this.objectID !== '6531'
      && this.objectID !== '6363'
      && this.objectID !== '6344'
      && this.objectID !== '6577'
      && this.objectID !== '6622'
      && this.objectID !== '6663'
      && this.objectID !== '6347'
      && this.objectID !== '6343'
      && this.objectID !== '6373'
      && this.objectID !== '6350'
    ){
      this.http.get('/templates/' + this.src).subscribe((res) => {
        this.html = res.text();
        this.isComponentType = 1;
      });
    } else if (this.pos == 3 && (this.objectID === 'ZAZNAM_PRODUKTU_NG2' || this.objectID === '6371')) {
      this.isComponentType = 2;
      this.html = '<record></record>';
    } else if (this.pos == 3 && (this.objectID === 'KONFIGURATOR_NG2' || this.objectID === '6376')) {
      this.isComponentType = 2;
      this.html = '<configurator></configurator>';
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM2_NG' || this.objectID === '6531')) {
      this.isComponentType = 2;
      this.html = '<list2></list2>';
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM_NG2' || this.objectID === '6370')) {
      this.isComponentType = 2;
      this.html = '<list class="site_subpage_content n-space-bottom" [asListType]="1"></list>';
    } else if (this.pos == 3 && (this.objectID === 'REDIRECT_NAVIGATION_NG2' || this.objectID === '6363')) {
      this.isComponentType = 2;
      this.html = '<redirect-navigation></redirect-navigation>';
    } else if (this.pos == 1 && (this.objectID === 'SIDE_MENU_NG2' || this.objectID === '6344')) {
      this.isComponentType = 2;
      //this.html = '<shop-categories [typeShowing]="\'showCats\'"></shop-categories>';
      this.obj = ShopCategories;
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM3_NG2' || this.objectID === '6577')) {
      this.isComponentType = 2;
      this.html = '<list [asListType]="3"></list>';
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM4_NG2' || this.objectID === '6622')) {
      this.isComponentType = 2;
      this.html = '<list [asListType]="4"></list>';
    } else if (this.pos == 1 && (this.objectID === 'SIDE_MENU_DEV_NG2' || this.objectID === '6663')) {
      this.isComponentType = 2;
      //this.html = '<shop-categories-dev [typeShowing]="\'showCats\'"></shop-categories-dev>';
    } else if (this.pos == 7 && (this.objectID === 'PARTNERS_NG2' || this.objectID === '6347')) {
      this.html = '<partners></partners>';
    } else if (this.pos == 6 && (this.objectID === 'PAGE_HEADER_NG2' || this.objectID === '6343')) {
      this.isComponentType = 2;
      //this.html = '<page-header></page-header>';
      this.obj = PageHeader;
    } else if (this.pos == 3 && (this.objectID === 'LOGIN_PAGE_NG2' || this.objectID === '6373')) {
      this.isComponentType = 2;
      this.html = '<login-page></login-page>';
    } else if (this.pos == 3 && (this.objectID === 'SLIDES_NG2' || this.objectID === '6350')) {
      this.isComponentType = 2;
      this.obj = SlidesObj;
    }
  }
}
