import { Component } from '@angular/core';

@Component({
  selector: 'home-back-to-top',
  templateUrl: './back-to-top.component.html',
  styles: ``
})
export class BackToTopComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
