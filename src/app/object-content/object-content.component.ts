/*
import {
  Component,
  Directive,
  ComponentFactory,
  ComponentMetadata,
  ComponentResolver,
  Input,
  ReflectiveInjector,
  ViewContainerRef,
} from '@angular/core'
import { Http, Response } from '@angular/http';
//import { ROUTER_DIRECTIVES } from '@angular/router';

/!*import { Record } from '../record/record.component.ts';
import { List } from '../list/list.component.ts';
import { List2 } from '../list2/list2.component.ts';
import { SlidesComponent } from '../slides/slides.component.ts';
import { Carousel } from '../carousel/carousel.component.ts';
import { Configurator } from '../configurator/configurator.component';
import { MenuSetActive } from '../menu-set-active/menu-set-active.component';
import { RedirectNavigation } from '../redirect-navigation/redirect-navigation.component';
import { ShopCategories } from '../shop-categories/shop-categories.component';
import { ShopCategoriesDev } from '../shop-categories-dev/shop-categories-dev.component';
import { Partners } from '../partners/partners.component';
import { PageHeader } from '../page-header/page-header.component';
import { LoginPage } from '../login-page/login-page.component';*!/

export function createComponentFactory(resolver: ComponentResolver, metadata: ComponentMetadata, cmpClass: any): Promise<ComponentFactory<any>> {
  const decoratedCmp = Component(metadata)(cmpClass);
  return resolver.resolveComponent(decoratedCmp);
}

@Directive({
  selector: 'dynamic-html-outlet',
})
export class ObjectContent {
  @Input() src: string;
  @Input('object-id')
  private objectID: string;
  @Input('object-type')
  private objectType: number;
  @Input('pos')
  private pos: number;

  constructor(private vcRef: ViewContainerRef, private resolver: ComponentResolver, private http: Http) {
  }

  ngOnChanges() {
    if (!this.src) return;

    if (this.objectType == 1 &&
      this.objectID !== '6371'
      && this.objectID !== '6370'
      && this.objectID !== '6376'
      && this.objectID !== '6531'
      && this.objectID !== '6363'
      && this.objectID !== '6344'
      && this.objectID !== '6577'
      && this.objectID !== '6622'
      && this.objectID !== '6663'
      && this.objectID !== '6347'
      && this.objectID !== '6343'
      && this.objectID !== '6373'
    ){
      this.http.get('templates/' + this.src).toPromise().then((res) => {
        this.callback(res.text());
      });
    } else if (this.pos == 3 && (this.objectID === 'ZAZNAM_PRODUKTU_NG2' || this.objectID === '6371')) {
      this.callback('<record></record>');
    } else if (this.pos == 3 && (this.objectID === 'KONFIGURATOR_NG2' || this.objectID === '6376')) {
      this.callback('<configurator></configurator>');
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM2_NG' || this.objectID === '6531')) {
      this.callback('<list2></list2>');
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM_NG2' || this.objectID === '6370')) {
        this.callback('<list class="site_subpage_content n-space-bottom" [asListType]="1"></list>');
    } else if (this.pos == 3 && (this.objectID === 'REDIRECT_NAVIGATION_NG2' || this.objectID === '6363')) {
      this.callback('<redirect-navigation></redirect-navigation>');
    } else if (this.pos == 1 && (this.objectID === 'SIDE_MENU_NG2' || this.objectID === '6344')) {
      this.callback('<shop-categories [typeShowing]="\'showCats\'"></shop-categories>');
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM3_NG2' || this.objectID === '6577')) {
      this.callback('<list [asListType]="3"></list>');
    } else if (this.pos == 3 && (this.objectID === 'SEZNAM4_NG2' || this.objectID === '6622')) {
      this.callback('<list [asListType]="4"></list>');
    } else if (this.pos == 1 && (this.objectID === 'SIDE_MENU_DEV_NG2' || this.objectID === '6663')) {
      this.callback('<shop-categories-dev [typeShowing]="\'showCats\'"></shop-categories-dev>');
    } else if (this.pos == 7 && (this.objectID === 'PARTNERS_NG2' || this.objectID === '6347')) {
      this.callback('<partners></partners>');
    } else if (this.pos == 6 && (this.objectID === 'PAGE_HEADER_NG2' || this.objectID === '6343')) {
      this.callback('<page-header></page-header>');
    } else if (this.pos == 3 && (this.objectID === 'LOGIN_PAGE_NG2' || this.objectID === '6373')) {
      this.callback('<login-page></login-page>');
    }
  }

  private callback(templ) {
    const metadata = new ComponentMetadata({
      selector: 'dynamic-html',
      template: templ,
      /!*directives: [
        ROUTER_DIRECTIVES,
        Record,
        List,
        List2,
        SlidesComponent,
        Carousel,
        Configurator,
        MenuSetActive,
        RedirectNavigation,
        ShopCategories,
        ShopCategoriesDev,
        Partners,
        PageHeader,
        LoginPage
      ]*!/
    });
    const cmpClass = class DynamicComponent {
      constructor() {
      }
      onChange(val){
        console.log(val);
      }
    };
    createComponentFactory(this.resolver, metadata, cmpClass)
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
        this.vcRef.createComponent(factory, 0, injector, []);
      });
  }
}
*/
