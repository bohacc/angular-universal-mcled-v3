import { Component } from '@angular/core';
import {Router} from "@angular/router";

import Constants = require('../../backend/constants');

@Component({
  selector: 'order-summary',
  templateUrl: 'order-summary.template.html'
})

export class OrderSummary {
  constructor (private router: Router) {}

  onSubmit() {
    this.router.navigate([Constants.PATHS.ORDER_SUCCESS]);
  }
}
