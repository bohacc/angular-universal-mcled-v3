import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import Constants = require('../constants/constants.service');

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.template.html',
})
export class ListItem {
  @Input('item') item: any;

  constructor(private router: Router) {}

  buy() {
    this.router.navigate([Constants.PATHS.CART]);
  }
}
