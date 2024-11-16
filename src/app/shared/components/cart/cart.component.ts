import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() isOpen: boolean = false;

  // Lista de productos en el carrito (esto podría venir de un servicio más adelante)
  cartItems = [
    { name: 'carrito vacio', price: 0 },
  ];
}
