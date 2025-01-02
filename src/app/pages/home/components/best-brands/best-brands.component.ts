import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'home-best-brands',
  templateUrl: './best-brands.component.html',
  styles: ``
})
export class BestBrandsComponent implements OnInit {
  brands = [
    /* { src: '.././assets/images/brands/ultradent.png', alt: 'Marca 1' }, */
    { src: '.././assets/images/brands/gospa.png', alt: 'Marca 2' },
    /* { src: '.././assets/images/brands/kerr.png', alt: 'Maarca 3' }, */
    /* { src: '.././assets/images/brands/eurodent.png', alt: 'Marca 4' }, */
    /* { src: '.././assets/images/brands/3m.png', alt: 'Marca 5' }, */
    { src: '.././assets/images/brands/dentsplySirona.png', alt: 'Marca 2' },
    /* { src: '.././assets/images/brands/ivoclar.png', alt: 'Marca 7' }, */
    { src: '.././assets/images/brands/eufar.png', alt: 'Marca 3' },
    { src: '.././assets/images/brands/proquident.png', alt: 'Marca 4' },
    { src: '.././assets/images/brands/densell.png', alt: 'Marca 5' },
  ];

  constructor() { }

  ngOnInit() {
    AOS.init(); // Inicializa AOS en el componente principal
  }
}
