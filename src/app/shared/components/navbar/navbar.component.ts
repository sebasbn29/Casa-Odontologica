import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
  isMenuOpen = false;
  isUserMenuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }


  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
