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
  cartItems: Array<any>;
  productCode: string;
  amount: number = 1;
  amountOther: number;

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
        this.cartItems = this.cartObj.records;
      });
  }

  buy() {
    this.http.post('/products/buy/', {code: this.productCode, amount: this.amountOther})
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
}
