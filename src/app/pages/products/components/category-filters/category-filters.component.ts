import { Component, HostListener, OnInit } from '@angular/core';
import { SearchService } from '../../../../shared/services/search.service';

@Component({
  selector: 'products-category-filters',
  templateUrl: './category-filters.component.html',
  styles: ``
})
export class CategoryFiltersComponent implements OnInit {
  isFilterOpen = false;
  isSmallScreen = true;
  categories = ['Ortodoncia', 'Restaurativos', 'Equipos', 'Materiales'];
  brands = ['Eufar', 'Dentsply Sirona', 'Gospa'];
  selectedBrands: string[] = [];
  selectedCategory: string | null = null;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.searchService.setCategoryFilter(category);
  }

  toggleBrandSelection(brand: string) {
    const index = this.selectedBrands.indexOf(brand);
    if (index > -1) {
      this.selectedBrands.splice(index, 1);
    } else {
      this.selectedBrands.push(brand);
    }
    this.searchService.setBrandFilter(this.selectedBrands);
  }

  clearFilters() {
    this.selectedBrands = [];
    this.selectedCategory = null;
    this.searchService.clearFilters();
  }

  hasActiveFilters(): boolean {
    return this.selectedBrands.length > 0 || this.selectedCategory !== null;
  }
}
