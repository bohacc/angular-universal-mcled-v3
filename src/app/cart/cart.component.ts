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

  constructor (private http: Http) {
    this.appService = AppService.getInstance();
  }

  ngOnInit() {
    //this.getData();
  }

  removeItem(item: any) {
    //TODO: remove item from cart
  }

  getData() {
    this.http.get(this.appService.getRootPath() + '/cart')
      .subscribe(res => {
        this.cartObj = res.json();
      });
  }

  buy() {
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
    obj.amount += 1;
  }

  decAmount(obj: any) {
    obj.amount -= 1;
  }
}
