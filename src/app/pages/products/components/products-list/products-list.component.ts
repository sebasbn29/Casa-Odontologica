import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ExcelService } from '../../../../shared/services/excel.service';
import { SearchService } from '../../../../shared/services/search.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filteredProducts: any[] = [];
  displayedProducts: any[] = [];
  searchSubscription: Subscription | undefined;
  categorySubscription: Subscription | undefined;
  brandSubscription: Subscription | undefined;
  loading: boolean = false;
  noResults: boolean = false;
  itemsPerPage: number = 20; // Número de productos por carga
  currentPage: number = 1;

  constructor(
    private excelService: ExcelService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    this.searchSubscription = this.searchService.searchTerm$.subscribe(term => {
      this.applyFilter(term);
    });

    this.categorySubscription = this.searchService.categoryFilter$.subscribe(category => {
      this.applyFilter('', category);
    });

    this.brandSubscription = this.searchService.brandFilter$.subscribe(brands => {
      this.applyFilter('', undefined, brands);
    });
  }

  loadProducts(): void {
    this.loading = true;
    this.excelService.getProducts().subscribe(
      data => {
        this.products = data;
        this.applyFilter(''); // Aplicar filtro inicialmente
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.error('Error al cargar los productos', error);
      }
    );
  }

  applyFilter(term: string = '', category: string | null | undefined = undefined, brands: string[] = []): void {
    this.loading = true;

    this.filteredProducts = this.products.filter(product => {
      const matchesTerm = term ? product.nombre.toLowerCase().includes(term.toLowerCase()) : true;
      const matchesCategory = category ? product.categoria === category : true;
      const matchesBrand = brands.length ? brands.includes(product.marca) : true;
      return matchesTerm && matchesCategory && matchesBrand;
    });

    this.displayedProducts = this.filteredProducts.slice(0, this.itemsPerPage); // Mostrar los primeros productos
    this.noResults = this.filteredProducts.length === 0;
    this.currentPage = 1; // Reiniciar la paginación al aplicar un filtro
    this.loading = false;
  }

  loadMoreProducts(): void {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    const moreProducts = this.filteredProducts.slice(start, end);
    this.displayedProducts = [...this.displayedProducts, ...moreProducts];
    this.currentPage++;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.loading) {
      this.loadMoreProducts();
    }
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/productos', productId]);
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) this.searchSubscription.unsubscribe();
    if (this.categorySubscription) this.categorySubscription.unsubscribe();
    if (this.brandSubscription) this.brandSubscription.unsubscribe();
  }
}
