import { Component } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'order-header',
  templateUrl: 'order-header.template.html'
})

export class OrderHeader {
  steps: Array<Boolean> = [false, false, false, false];
  pages: Array<string> = ['kosik', '', '', 'shrnuti-objednavky'];
  appService: AppService;

  constructor () {
    this.appService = AppService.getInstance();
  }

  ngOnInit() {
    let code = this.appService.getPath();
    this.steps = [false, false, false, false];
    this.steps[this.pages.indexOf(code)] = true;
  }
}
