import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [DynamicComponent],
  providers: [],
  exports: [DynamicComponent]
})

export class DynamicModule { }
