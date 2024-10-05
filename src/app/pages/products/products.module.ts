import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutProductsComponent } from './layout-products/layout-products.component';
import { ProductsComponent } from './products.component';
import { CategoryFiltersComponent } from './components/category-filters/category-filters.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [
    LayoutProductsComponent,
    ProductsComponent,
    CategoryFiltersComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductsModule { }
