import { Component } from '@angular/core';
import {Router} from "@angular/router";

import Constants = require('../../backend/constants');

@Component({
  selector: 'order-personal-data',
  templateUrl: 'order-personal-data.template.html'
})

export class OrderPersonalData {
  constructor (private router: Router) {}

  onSubmit() {
    this.router.navigate([Constants.PATHS.ORDER_SUMMARY]);
  }

  onSubmitLogin() {

  }
}
