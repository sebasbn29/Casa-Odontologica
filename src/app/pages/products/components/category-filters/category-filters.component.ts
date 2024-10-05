import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'products-category-filters',
  templateUrl: './category-filters.component.html',
  styles: ``
})
export class CategoryFiltersComponent {
  isFilterOpen = false;
  isDesktop = false;

  price: number = 500;
  selectedBrands: string[] = [];
  brands = ['Marca 1', 'Marca 2', 'Marca 3'];
  categories = ['Brackets', 'Alambres', 'Ligaduras', 'Elásticos', 'Herramientas', 'Accesorios'];

  constructor() {
    this.updateScreen();
  }

  // Escucha los cambios de tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  updateScreen() {
    this.isDesktop = window.innerWidth >= 768;
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  toggleBrandSelection(brand: string) {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }
  }
}
