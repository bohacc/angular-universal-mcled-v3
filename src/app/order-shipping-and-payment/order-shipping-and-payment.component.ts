import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Constants = require('../../backend/constants');

@Component({
  selector: 'order-shipping-and-payment',
  templateUrl: 'order-shipping-and-payment.template.html'
})

export class OrderShippingAndPayment {
  constructor (private router: Router) {}

  onSubmit() {
    this.router.navigate([Constants.PATHS.ORDER_PERSONAL_DATA]);
  }
}
