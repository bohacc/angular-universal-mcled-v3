import { Component, Output, EventEmitter } from '@angular/core';

import { ISelectBox } from '../select-box/select-box.interface';
import { ISelectItem } from '../select-item/select-item.interface';
import { AppService } from '../app.service';

@Component({
  selector: 'list-filter-basic-custom-2',
  templateUrl: 'list-filter-basic-custom-2.template.html',
})
export class ListFilterBasicCustom2 {
  @Output('onSelectItem') onSelectItemOut = new EventEmitter<ISelectItem>();
  defaultItem: ISelectBox = {id: '', name: '', val: ''};
  itemsComboBox: Array<ISelectBox>;
  selectedItems: Array<ISelectBox> = [];
  appService: AppService;

  constructor() {
    this.appService = AppService.getInstance();
    this.itemsComboBox = [
      {id: 'MC000002:75 W', name: '75 W', val: 'MC000002:75 W'}
    ];
  }

  onSelectItem(item: ISelectBox) {
    this.selectedItems = this.appService.getSelectItemParam(item, this.selectedItems);
    this.onSelectItemOut.emit({id: item.id, name: item.name, val: item.val, type: 1, code: null});
  }

  onSelectItemComboBox(code: string, item: ISelectBox) {
    this.selectedItems = this.appService.getSelectItemParamComboBox(code, item, this.selectedItems);
    //console.log(this.selectedItems);
    this.onSelectItemOut.emit({id: item.id, name: item.name, val: item.val, type: 2, code: code});
  }
}
