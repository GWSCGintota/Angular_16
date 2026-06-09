import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShopModule} from "./modules/shop/shop.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HeaderComponentComponent} from "./components/header-component/header-component.component";
import {SidebarComponentComponent} from "./components/sidebar-component/sidebar-component.component";
import {NavbarComponentComponent} from "./components/navbar-component/navbar-component.component";
import {HeroComponentComponent} from "./components/hero-component/hero-component.component";
import {FeaturesComponentComponent} from "./components/features-component/features-component.component";
import {
  FeaturedProductsComponentComponent
} from "./components/featured-products-component/featured-products-component.component";
import {FeatureComponentComponent} from "./components/feature-component/feature-component.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DealsComponent} from "./components/deals/deals.component";
import {NewArrivalsComponent} from "./components/new-arrivals/new-arrivals.component";
import {BestSellersComponent} from "./components/best-sellers/best-sellers.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
// @ts-ignore
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SidebarComponentComponent,
    NavbarComponentComponent,
    HeroComponentComponent,
    FeaturesComponentComponent,
    FeaturedProductsComponentComponent,
    FeatureComponentComponent,
    DashboardComponent,
    DealsComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
