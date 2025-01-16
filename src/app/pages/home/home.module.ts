import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { HomeComponent } from './home.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BestBrandsComponent } from './components/best-brands/best-brands.component';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { CustomerOpinionComponent } from './components/customer-opinion/customer-opinion.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    WelcomeComponent,
    LayoutHomeComponent,
    HomeComponent,
    NewProductsComponent,
    CategoriesComponent,
    BestBrandsComponent,
    ServicesHomeComponent,
    CustomerOpinionComponent,
    BackToTopComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    NewProductsComponent,
  ]
})
export class HomeModule { }
