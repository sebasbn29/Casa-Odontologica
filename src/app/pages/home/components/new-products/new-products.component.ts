import { Component, OnInit } from '@angular/core';
import { ExcelService } from './../../../../shared/services/excel.service'; // Ajusta la ruta según tu estructura de carpetas
import { Router } from '@angular/router';

@Component({
  selector: 'home-components-new-products',
  templateUrl: './new-products.component.html',
  styles: ``
})
export class NewProductsComponent implements OnInit {
  products: any[] = [];
  displayedProducts: any[] = [];

  constructor(private excelService: ExcelService, private router: Router) {}

  ngOnInit(): void {
    this.excelService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.displayedProducts = this.getRandomProducts(this.products, 4);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/productos', productId]);
  }

  getRandomProducts(products: any[], count: number): any[] {
    // Mezcla la lista de productos
    const shuffled = products.sort(() => 0.5 - Math.random());
    // Selecciona los primeros 'count' productos después de mezclar
    return shuffled.slice(0, count);
  }
}
