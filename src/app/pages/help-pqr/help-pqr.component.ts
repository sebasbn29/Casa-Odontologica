import { Component } from '@angular/core';
import { EmailService } from '../../shared/services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-help-pqr',
  templateUrl: './help-pqr.component.html',
})
export class HelpPqrComponent {
  contactData = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: '',
  };
  selectedFile: File | null = null;
  isLoading: boolean = false;

  constructor(private emailService: EmailService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  sendEmail() {
    this.isLoading = true;

    const formData = new FormData();
    formData.append('nombre', this.contactData.nombre);
    formData.append('telefono', this.contactData.telefono);
    formData.append('email', this.contactData.email);
    formData.append('mensaje', this.contactData.mensaje);

    if (this.selectedFile) {
      formData.append('archivo', this.selectedFile);
    }

    this.emailService.sendEmail(formData).subscribe({
      next: (response) => {
        this.isLoading = false;
        // Mostrar mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Correo enviado!',
          text: 'Tu correo se ha enviado exitosamente. Nos pondremos en contacto contigo pronto.',
          confirmButtonText: 'Aceptar',
        });
        // Reiniciar datos del formulario
        this.contactData = {
          nombre: '',
          telefono: '',
          email: '',
          mensaje: '',
        };
        this.selectedFile = null;
      },
      error: (error) => {
        this.isLoading = false;
        // Mostrar mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar el correo',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
          confirmButtonText: 'Aceptar',
        });
        console.error(error);
      },
    });
  }
}
