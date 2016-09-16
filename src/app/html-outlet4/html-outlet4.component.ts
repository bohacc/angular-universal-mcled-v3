//our root app component
import { NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core'
import { FormsModule } from '@angular/forms';

import { UniversalModule } from 'angular2-universal';

import { PageHeader } from '../page-header/page-header.component';
import { ShopCategories } from '../shop-categories/shop-categories.component';
import { LoginHeader } from '../login-header/login-header.component';
import { routing, appRoutingProviders } from '../app.routing';

// Helper component to add dynamic components
@Component({
  selector: 'dcl-wrapper-other',
  template: `<div #target></div>`
})
export class HtmlOutlet4 {
  @ViewChild('target', {read: ViewContainerRef}) target;
  @Input() html;
  cmpRef: ComponentRef<any>;
  private isViewInitialized:boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
    if (!this.html) {
      return;
    }

    let html = this.html;
    @Component({template: html})
    class TemplateComponent {}
    @NgModule({
      declarations: [
        TemplateComponent,
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
    class TemplateModule {}
    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = mod.componentFactories.find((comp) =>
      comp.componentType === TemplateComponent
    );

    this.cmpRef = this.target.createComponent(factory);
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
