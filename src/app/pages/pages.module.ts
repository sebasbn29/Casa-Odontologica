import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HelpPqrComponent } from './help-pqr/help-pqr.component';
import { BranchesComponent } from './branches/branches.component';
import { AboutComponent } from './about/about.component';
import { HomeModule } from './home/home.module';
import { BranchInfoComponent } from './branches/components/branch-info/branch-info.component';
import { BranchMapComponent } from './branches/components/branch-map/branch-map.component';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [
    HelpPqrComponent,
    BranchesComponent,
    AboutComponent,
    BranchInfoComponent,
    BranchMapComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ProductsModule,
  ]
})
export class PagesModule { }