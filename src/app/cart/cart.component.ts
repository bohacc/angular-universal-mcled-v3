import { Component } from '@angular/core';

import {AppService} from "../app.service";
import {Http} from "@angular/http";

@Component({
  selector: 'cart',
  templateUrl: 'cart.template.html'
})

export class Cart {
  appService: AppService;
  cartObj: any = {};
  amount: number = 1;
  otherProduct: any = {code: null, amount: 1};
  test: any;
  httpTimeoutU: any;
  httpTimeoutR: any;
  httpSubscriptionU: any;
  httpSubscriptionR: any;

  constructor (private http: Http) {
    this.appService = AppService.getInstance();
  }

  ngOnInit() {
    this.getData();
  }

  removeItem(item: any) {
    let _this = this;
    if (this.httpTimeoutR) {
      clearTimeout(this.httpTimeoutR);
    }
    this.httpTimeoutR = setTimeout(function () {
      if (_this.httpSubscriptionR) {
        _this.httpSubscriptionR.unsubscribe();
      }
      _this.httpSubscriptionR = _this.http.delete(_this.appService.getRootPath() + '/products/item/' + item.itemId)
        .subscribe(res => {
          _this.getData();
        });
    }, 200);
  }

  updateItem(item: any) {
    let _this = this;
    if (this.httpTimeoutU) {
      clearTimeout(this.httpTimeoutU);
    }
    this.httpTimeoutU = setTimeout(function () {
      if (_this.httpSubscriptionU) {
        _this.httpSubscriptionU.unsubscribe();
      }
      _this.httpSubscriptionU = _this.http.put(_this.appService.getRootPath() + '/products', item)
        .subscribe(res => {
          _this.getData();
        });
    }, 200);
  }

  getData() {
    this.http.get(this.appService.getRootPath() + '/cart')
      .subscribe(res => {
        this.cartObj = res.json();
      });
  }

  buy() {
    if (!this.otherProduct.code || !this.otherProduct.amount) {
      return;
    }
    this.http.post('/products/buy/', this.otherProduct)
      .subscribe(
        res => {
          let data = res.json() || [];
          this.getData();
        },
        err => {
          //console.log(Constants.PRODUCT_ADD_TO_CART_ERROR);
        }
      );
  }

  incAmount(obj: any) {
    obj.amount = parseInt(obj.amount) + 1;
    this.updateItem(obj);
  }

  decAmount(obj: any) {
    if (obj.amount == 1) {
      return;
    }
    obj.amount = parseInt(obj.amount) - 1;
    this.updateItem(obj);
  }
}
