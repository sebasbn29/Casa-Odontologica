import { Component } from '@angular/core';

@Component({
  selector: 'home-customer-opinion',
  templateUrl: './customer-opinion.component.html',
  styles: ``
})
export class CustomerOpinionComponent {
  currentIndex = 0; // Índice inicial de la opinión visible
  opinionCount = 3; // Número de opiniones

  // Método para ir a la opinión anterior
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.opinionCount - 1; // Vuelve a la última opinión
    }
  }

  // Método para ir a la siguiente opinión
  next() {
    if (this.currentIndex < this.opinionCount - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve a la primera opinión
    }
  }
}
