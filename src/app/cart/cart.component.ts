import { Component } from '@angular/core';

import {AppService} from "../app.service";
import {Http} from "@angular/http";

@Component({
  selector: 'cart',
  templateUrl: 'cart.template.html'
})

export class Cart {
  appService: AppService;
  cart: any;
  cartItems: Array<any>;

  constructor (private http: Http) {
    this.appService = AppService.getInstance();
  }

  ngOnInit() {
    this.http.get(this.appService.getRootPath() + '/cart')
      .subscribe(res => {
        this.cart = res.json();
        this.cartItems = this.cart.records;
      });
  }

  removeItem(item: any) {
    //TODO: remove item from cart
  }
}
