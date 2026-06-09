import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {BestSellersComponent} from "./components/best-sellers/best-sellers.component";
import {NewArrivalsComponent} from "./components/new-arrivals/new-arrivals.component";
import {DealsComponent} from "./components/deals/deals.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path :'' , component : DashboardComponent},
  { path :'shop' , loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule) },
  { path :'deals' , component : DealsComponent},
  { path :'new-arrivals' , component : NewArrivalsComponent},
  { path :'best-sellers' , component : BestSellersComponent},
  { path :'contact-us' , component : ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
