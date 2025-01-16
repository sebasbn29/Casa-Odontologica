import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CartComponent,
    InstagramFeedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    InstagramFeedComponent
  ]
})
export class SharedModule { }
