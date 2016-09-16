"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import { ObjectContent } from '../object-content/object-content.component.ts';
//import { MyFilterArray } from '../pipes/my-filter-array.pipe.ts';
var Section = (function () {
    function Section() {
        this.self = this; // copy of context
        this.html = '';
    }
    Section.prototype.ngOnInit = function () {
        //console.log('SECTION INIT');
    };
    __decorate([
        core_1.Input('pos')
    ], Section.prototype, "pos", void 0);
    __decorate([
        core_1.Input('objects')
    ], Section.prototype, "objects", void 0);
    Section = __decorate([
        core_1.Component({
            selector: 'section',
            templateUrl: 'section.template.html',
        })
    ], Section);
    return Section;
}());
exports.Section = Section;
