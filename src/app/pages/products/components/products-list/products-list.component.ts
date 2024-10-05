import { Component } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: ``
})
export class ProductsListComponent {
  products = [
    { name: 'Producto 1', description: 'Descripción del producto 1', price: 100 },
    { name: 'Producto 2', description: 'Descripción del producto 2', price: 200 },
    { name: 'Producto 3', description: 'Descripción del producto 3', price: 300 },
    { name: 'Producto 4', description: 'Descripción del producto 4', price: 400 },
    { name: 'Producto 5', description: 'Descripción del producto 4', price: 100 },
    { name: 'Producto 6', description: 'Descripción del producto 4', price: 250 },
    { name: 'Producto 7', description: 'Descripción del producto 4', price: 310 },
    { name: 'Producto 8', description: 'Descripción del producto 4', price: 110 },
    { name: 'Producto 9', description: 'Descripción del producto 4', price: 400 },
    // Agrega más productos según sea necesario
  ];
}
