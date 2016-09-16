import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import Constants = require('../constants/constants.service');
import { AppService } from '../app.service';

@Component({
  selector: 'login-header',
  templateUrl: 'login-header.template.html',
  /*directives: [
    ROUTER_DIRECTIVES
  ]*/
})
export class LoginHeader {
  appService: AppService;
  appStore: any;

  constructor(private router: Router, private http: Http) {
    this.appService = AppService.getInstance();
    this.appStore = this.appService.getStore();
  }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.http.get('/logout')
      .subscribe(res => {
        let data = res.json();
        this.appService.setLogged(false);
        this.router.navigate([Constants.PATHS.LOGIN]);
      });
  }

  getUser() {
    this.http.get(this.appService.getRootPath() + '/user')
      .subscribe(res => {
        let data = res.json();
        this.appService.setLogged((data.login ? data.login.length > 0 : false));
        this.appService.setLoginName(data.login);
      });
  }
}
