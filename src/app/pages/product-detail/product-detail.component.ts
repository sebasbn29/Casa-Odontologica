import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExcelService } from '../../shared/services/excel.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private excelService: ExcelService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.loadProductDetail(productId);
    });
  }

  loadProductDetail(productId: number): void {
    this.excelService.getProducts().subscribe(
      products => {
        this.product = products.find(p => p.id === productId);
      },
      error => {
        console.error('Error al cargar el producto', error);
      }
    );
  }
}
