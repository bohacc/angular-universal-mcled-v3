import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

//import { ObjectContent } from '../object-content/object-content.component.ts';
//import { MyFilterArray } from '../pipes/my-filter-array.pipe.ts';

@Component({
  selector: 'section',
  templateUrl: 'section.template.html',
  //directives: [ObjectContent, ROUTER_DIRECTIVES],
  //pipes: [MyFilterArray]
})

export class Section {
  @Input('pos')
  pos: number;
  @Input('objects')
  objects: Object;

  self = this; // copy of context
  html = '';

  constructor() { }

  ngOnInit() {
    //console.log('SECTION INIT');
  }
}
