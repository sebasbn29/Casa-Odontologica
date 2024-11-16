import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  isUserMenuOpen = false;
  isCartOpen = false;
  showSearchBar: boolean = false;

  constructor(private router: Router, private searchService: SearchService) {}


  ngOnInit(): void {
    this.router.events.subscribe(() => {
      // Verifica si la ruta actual es '/productos'
      this.showSearchBar = this.router.url === '/productos';
    });
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }

  onSearch(event: KeyboardEvent): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchService.setSearchTerm(searchTerm);

    // Detectar cuando se presiona Enter
    if (event.key === 'Enter') {
      
      // Cierra el menú desplegable en dispositivos móviles si está abierto
      if (this.isMenuOpen) {
        this.toggleMenu();
      }
      // Redirigir a la ruta /productos si no se encuentra en esa ruta
      if (this.router.url !== '/productos') {
        this.router.navigate(['/productos']);
      }
    }
  }

}
