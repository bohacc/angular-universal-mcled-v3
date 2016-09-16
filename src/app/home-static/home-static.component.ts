import { Component } from '@angular/core';

/*import { PageHeader } from '../page-header/page-header.component';
import { ShopCategories } from '../shop-categories/shop-categories.component';
import { BannerMcled } from '../banner-mcled/banner-mcled.component';
import { ScrollBarWidth } from '../scrollbar-width/scrollbar-width';
import { AppWidth } from '../app-width/app-width.component';
import { ProductsHomepage } from '../products-homepage/products-homepage.component';
import { ArticlesHomepage } from '../articles-homepage/articles-homepage.component';
import { Partners } from '../partners/partners.component';
import { Footer } from '../footer/footer.component';
import { Copyright } from '../copyright/copyright.component';
import { DeliveryFree } from '../delivery-free/delivery-free.component';
import { LoginNewsletter } from '../login-newsletter/login-newsletter.component';
import { AppService } from '../app.service';*/

@Component({
  selector: 'home-static',
  templateUrl: 'home-static.template.html',
/*  directives: [
    PageHeader,
    ShopCategories,
    BannerMcled,
    ScrollBarWidth,
    AppWidth,
    ProductsHomepage,
    ArticlesHomepage,
    Partners,
    Footer,
    Copyright,
    DeliveryFree,
    LoginNewsletter
  ]*/
})
export class HomeStatic {
  //appService: AppService;

  constructor() {
    //this.appService = AppService.getInstance();
  }

  ngAfterViewInit() {
    //this.appService.refreshWidth();
  }

  onResize(event) {
    //this.appService.setAppWidth(event.target.innerWidth);
    //this.appService.refreshWidth();
  }
}
