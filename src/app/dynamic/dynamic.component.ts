import { Component, Input } from '@angular/core';

@Component({
  selector: 'dynamic-component',
  template: `
        <div>
            <h1>{{title}}</h1>
            {{descr}}
        </div>
    `
})
export class DynamicComponent {
  @Input() title;
  @Input() descr;

  constructor() {  }
}
