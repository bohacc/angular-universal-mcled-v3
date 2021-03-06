import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

import { AppService } from '../app.service';

@Component({
  selector: 'attachments',
  templateUrl: 'attachments.template.html'
})
export class Attachments {
  @Input('id') id: number;
  @Input('type') type: string;
  @Input('tableName') tableName: string;
  items: Array<{id: number, name: string, ext: string, fileName: string, size: number}>;
  loading: Boolean;
  appService: AppService;

  constructor(private http: Http) {
    this.appService = AppService.getInstance();
  }

  ngOnInit() {

  }

  ngOnChanges(inputChanges) {
    if (inputChanges.id) {
      this.getData();
    }
  }

  getData() {
    if (this.id && !isNaN(this.id) && this.type) {
      let self = this;
      this.loading = true;
      this.http.get(this.appService.getRootPath() + '/products/' + this.id + '/attachments/type/' + this.type + '/table/' + this.tableName)
        .subscribe(res => {
          let data = res.json() || [];
          data.map(function (el) {
            el.imgType = self.appService.getImageForType(el.ext);
          });
          this.items = data;
          this.loading = false;
        });
    }
  }
}
