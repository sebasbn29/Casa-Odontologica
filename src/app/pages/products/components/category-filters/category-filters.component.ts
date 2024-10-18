import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'products-category-filters',
  templateUrl: './category-filters.component.html',
  styles: ``
})
export class CategoryFiltersComponent implements OnInit {
  isFilterOpen = false; // Estado del modal
  isSmallScreen = true; // Detecta el tamaño de la pantalla
  categories = ['Brackets', 'Alambres', 'Ligaduras', 'Elásticos', 'Herramientas', 'Accesorios'];
  brands = ['Marca 1', 'Marca 2', 'Marca 3'];
  selectedBrands: string[] = [];

  ngOnInit() {
    this.checkScreenSize();
  }

  // Detecta el cambio de tamaño de la pantalla
  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  // Verifica si la pantalla es pequeña o grande
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; // Cambia el umbral según tus necesidades
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  toggleBrandSelection(brand: string) {
    const index = this.selectedBrands.indexOf(brand);
    if (index > -1) {
      this.selectedBrands.splice(index, 1);
    } else {
      this.selectedBrands.push(brand);
    }
  }

  applyFilters() {
    console.log('Filtros aplicados:', this.selectedBrands);
    this.toggleFilter();
  }
}
