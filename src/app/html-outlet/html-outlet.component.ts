import {
  Component,
  Directive,
  NgModule,
  Input,
  ViewContainerRef,
  Compiler,
  ReflectiveInjector
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { routing, appRoutingProviders } from '../app.routing';
import { PageHeader } from '../page-header/page-header.component';
import { ShopCategories } from '../shop-categories/shop-categories.component';
import { AppModule } from '../app.module';

@Directive({
  selector: 'html-outlet'
})
export class HtmlOutlet {
  @Input() html: string;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler) {}

  ngOnChanges() {
    const html = this.html;
    if (!html) return;

    @Component({
      selector: 'dynamic-comp',
      templateUrl: html
    })
    class DynamicHtmlComponent  { };

    @NgModule({
      imports: [
        CommonModule,
        routing,
        AppModule,
        BrowserModule,
        FormsModule,
      ],
      declarations: [
        DynamicHtmlComponent
      ],
      providers: [
        appRoutingProviders
      ]
    })
    class DynamicHtmlModule {}

    const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
    this.compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
      .then(factory => {
        const compFactory = factory.componentFactories
          .find(x => x.componentType === DynamicHtmlComponent);
        this.vcRef.clear();
        const cmpRef = this.vcRef.createComponent(compFactory, 0, injector);
      });
  }
}
