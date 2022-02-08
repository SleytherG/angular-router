import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebsiteRoutingModule} from "./website-routing.module.";
import {SwiperModule} from "swiper/angular";
import {LayoutComponent} from "./components/layout/layout.component";
import {NavComponent} from "./components/nav/nav.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {MyCartComponent} from "./pages/my-cart/my-cart.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {RecoveryComponent} from "./pages/recovery/recovery.component";
import {RegisterComponent} from "./pages/register/register.component";
import {SharedModule} from "../shared/shared.module";
import {QuicklinkModule} from "ngx-quicklink";

@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    MyCartComponent,
    ProductDetailComponent,
    ProfileComponent,
    RecoveryComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SwiperModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
