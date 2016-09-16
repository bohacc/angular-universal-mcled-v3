import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import { routing, appRoutingProviders } from './app/app.routing';
import { Home } from './app/home/home.component';
import { Section } from './app/section/section.component.ts';
import { MyFilterArray } from './app/pipes/my-filter-array.pipe.ts';
import { SectionObject } from './app/section-object/section-object.component';
import { HtmlOutlet3 } from './app/html-outlet3/html-outlet3.component';
import { HtmlOutlet4 } from './app/html-outlet4/html-outlet4.component';
import { Test } from './app/test/test.component';
import { PageHeader } from './app/page-header/page-header.component';
import { ShopCategories } from './app/shop-categories/shop-categories.component';
import { LoginHeader } from './app/login-header/login-header.component';
import { SlidesComponent } from './app/slides/slides.component';
import { Carousel } from './app/carousel/carousel.component';
import { SlidesObj } from './app/slides-obj/slides-obj.component';

export function main() {
  @NgModule({
    bootstrap: [ App ],
    declarations: [
      App,
      Home,
      Section,
      MyFilterArray,
      SectionObject,
      HtmlOutlet3,
      HtmlOutlet4,
      PageHeader,
      ShopCategories,
      LoginHeader,
      Test,
      SlidesComponent,
      Carousel,
      SlidesObj
    ],
    entryComponents: [
      Test,
      PageHeader,
      ShopCategories,
      SlidesObj
    ],
    imports: [
      UniversalModule,
      FormsModule,
      routing,
    ],
    providers: [
      appRoutingProviders,
    ]
  })
  class MainModule {
  }
  return MainModule;
}
