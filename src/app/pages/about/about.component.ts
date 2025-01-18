import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CountUp } from 'countup.js';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // Inicializa AOS
    AOS.init({
      duration: 1000000,
      once: true,
    });
  }


  showFullText = false;

  toggleText() {
    this.showFullText = !this.showFullText;
  }

  ngAfterViewInit(): void {
    // Configuración para animar los contadores
    this.initCountUp('experience', 26);
    this.initCountUp('clients', 50000);
    this.initCountUp('products', 5000);
    this.initCountUp('friends', 30);
    // Agrega más contadores si es necesario
  }

  private initCountUp(elementId: string, endValue: number): void {
    const options = { duration: 15 }; // Duración de la animación
    const countUp = new CountUp(elementId, endValue, options);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }
}
