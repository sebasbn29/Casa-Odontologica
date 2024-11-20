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

  //lista de links
  links: string[] = [
    'https://api.whatsapp.com/send?phone=573142291490&text=Hola%2C%20mi%20nombre%20es%20Adriana%20%F0%9F%A4%97%20y%20soy%20tu%20asesora%2C%20%C2%BFen%20qu%C3%A9%20puedo%20ayudarte%20hoy%3F',
    'https://api.whatsapp.com/send?phone=573142285202&text=Hola%2C%20mi%20nombre%20es%20Cristina%20%F0%9F%A4%97%20y%20soy%20tu%20asesora%2C%20%C2%BFen%20qu%C3%A9%20puedo%20ayudarte%20hoy%3F',
    'https://api.whatsapp.com/send?phone=573182817538&text=Hola%2C%20mi%20nombre%20es%20Consuelo%20%F0%9F%A4%97%20y%20soy%20tu%20asesora%2C%20%C2%BFen%20qu%C3%A9%20puedo%20ayudarte%20hoy%3F',
    'https://api.whatsapp.com/send?phone=573142290255&text=Hola%2C%20mi%20nombre%20es%20Maria%20Fernanda%20%F0%9F%A4%97%20y%20soy%20tu%20asesora%2C%20%C2%BFen%20qu%C3%A9%20puedo%20ayudarte%20hoy%3F',
  ];

  currentLink = this.links[0];

  changeLink() {
    setTimeout(() => {
      this.currentLink = this.links[Math.floor(Math.random() * this.links.length)];
    }, 0);
  }

}
