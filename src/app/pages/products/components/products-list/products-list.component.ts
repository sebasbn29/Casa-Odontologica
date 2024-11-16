import { Component, OnInit, OnDestroy } from '@angular/core';
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
  searchSubscription: Subscription | undefined;
  categorySubscription: Subscription | undefined;
  brandSubscription: Subscription | undefined;
  loading: boolean = false;
  noResults: boolean = false;

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
        this.loading = false;
        this.applyFilter('');
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

    this.noResults = this.filteredProducts.length === 0;
    this.loading = false;
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) this.searchSubscription.unsubscribe();
    if (this.categorySubscription) this.categorySubscription.unsubscribe();
    if (this.brandSubscription) this.brandSubscription.unsubscribe();
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/productos', productId]);
  }
}
