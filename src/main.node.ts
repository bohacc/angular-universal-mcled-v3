import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import { routing, appRoutingProviders } from './app/app.routing';
import { Section } from './app/section/section.component.ts';
import {Home} from "./app/home/home.component";
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
import {HomeStatic} from "./app/home-static/home-static.component";
import {LoginNewsletter} from "./app/login-newsletter/login-newsletter.component";
import {BannerMcled} from "./app/banner-mcled/banner-mcled.component";
import {DeliveryFree} from "./app/delivery-free/delivery-free.component";
import {ProductsHomepage} from "./app/products-homepage/products-homepage.component";
import {ArticlesHomepage} from "./app/articles-homepage/articles-homepage.component";
import {Copyright} from "./app/copyright/copyright.component";
import {Footer} from "./app/footer/footer.component";
import {CarouselPartners} from "./app/carousel-partners/carousel-partners.component";
import {Partners} from "./app/partners/partners.component";
import {LoginPage} from "./app/login-page/login-page.component";
import {RedirectNavigation} from "./app/redirect-navigation/redirect-navigation.component";
import {ListItem} from "./app/list-item/list-item.component";
import {List3Item} from "./app/list3-item/list3-item.component";
import {List4Item} from "./app/list4-item/list4-item.component";
import {SelectBox} from "./app/select-box/select-box.component";
import {List} from "./app/list/list.component";
import {Attachments} from "./app/attachments/attachments.component";
import {CarouselVertical} from "./app/carousel-vertical/carousel-vertical.component";
import {List2} from "./app/list2/list2.component";
import {ListFilter} from "./app/list-filter/list-filter.component";
import {ListFilterBasic} from "./app/list-filter-basic/list-filter-basic.component";
import {ListFilterAdvanced} from "./app/list-filter-advanced/list-filter-advanced.component";
import {ListFilterBasicCustom1} from "./app/list-filter-basic-custom-1/list-filter-basic-custom-1.component";
import {ListFilterBasicCustom2} from "./app/list-filter-basic-custom-2/list-filter-basic-custom-2.component";
import {ListFilterBasicCustom3} from "./app/list-filter-basic-custom-3/list-filter-basic-custom-3.component";
import {ListFilterBasicCustom4} from "./app/list-filter-basic-custom-4/list-filter-basic-custom-4.component";
import {ListFilterBasicCustom5} from "./app/list-filter-basic-custom-5/list-filter-basic-custom-5.component";
import {ListFilterBasicCustom6} from "./app/list-filter-basic-custom-6/list-filter-basic-custom-6.component";
import {ListFilterBasicCustom7} from "./app/list-filter-basic-custom-7/list-filter-basic-custom-7.component";
import {ListFilterBasicCustom8} from "./app/list-filter-basic-custom-8/list-filter-basic-custom-8.component";
import {ListFilterBasicCustom9} from "./app/list-filter-basic-custom-9/list-filter-basic-custom-9.component";
import {Pagination} from "./app/pagination/pagination.component";
import {SimilarProducts} from "./app/similar-products/similar-products.component";
import {Record} from "./app/record/record.component";
import {Configurator} from "./app/configurator/configurator.component";
import {ShopCategoriesObj} from "./app/shop-categories-obj/shop-categories-obj.component";
import {ShopCategoriesDevObj} from "./app/shop-categories-dev-obj/shop-categories-dev-obj.component";
import {ShopCategoriesDev} from "./app/shop-categories-dev/shop-categories-dev.component";
import {ListObj} from "./app/list-obj/list-obj.component";
import {List3Obj} from "./app/list3-obj/list3-obj.component";
import {List4Obj} from "./app/list4-obj/list4-obj.component";
import {HtmlOutlet} from "./app/html-outlet/html-outlet.component";
import {ScrollBarWidth} from "./app/scrollbar-width/scrollbar-width";
import {AppWidth} from "./app/app-width/app-width.component";
import {MenuSetActive} from "./app/menu-set-active/menu-set-active.component";
import {CartPage} from "./app/cart-page/cart-page.component";
import {Cart} from "./app/cart/cart.component";
import {OrderHeader} from "./app/order-header/order-header.component";


//noinspection TypeScriptUnresolvedVariable
let port = (parseInt(process.env.DIT_PORT, 10) || 9002);

@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    Home,
    HomeStatic,
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
    SlidesObj,
    LoginNewsletter,
    BannerMcled,
    DeliveryFree,
    ProductsHomepage,
    ArticlesHomepage,
    Copyright,
    Footer,
    CarouselPartners,
    Partners,
    LoginPage,
    RedirectNavigation,
    ListItem,
    List3Item,
    List4Item,
    SelectBox,
    List,
    Attachments,
    CarouselVertical,
    List2,
    ListFilter,
    ListFilterBasic,
    ListFilterAdvanced,
    ListFilterBasicCustom1,
    ListFilterBasicCustom2,
    ListFilterBasicCustom3,
    ListFilterBasicCustom4,
    ListFilterBasicCustom5,
    ListFilterBasicCustom6,
    ListFilterBasicCustom7,
    ListFilterBasicCustom8,
    ListFilterBasicCustom9,
    Pagination,
    SimilarProducts,
    Record,
    Configurator,
    ShopCategoriesObj,
    ShopCategoriesDevObj,
    ShopCategoriesDev,
    ListObj,
    List3Obj,
    List4Obj,
    ScrollBarWidth,
    AppWidth,
    MenuSetActive,
    Cart,
    CartPage,
    OrderHeader
    //HtmlOutlet
  ],
  entryComponents: [
    Test,
    PageHeader,
    SlidesObj,
    Partners,
    PageHeader,
    LoginPage,
    RedirectNavigation,
    List,
    List2,
    Configurator,
    Record,
    ShopCategoriesObj,
    ShopCategoriesDevObj,
    ListObj,
    List3Obj,
    List4Obj,
    SlidesComponent,
    CartPage
  ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    /*RouterModule.forRoot([
      { path: '', component: HomeStatic, pathMatch: 'full' }
    ]),*/
    routing,
  ],
  providers: [
    appRoutingProviders,
  ]
})
export class MainModule {}
