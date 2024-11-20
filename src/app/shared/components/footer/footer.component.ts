import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {
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

