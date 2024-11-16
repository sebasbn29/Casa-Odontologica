import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://backend-co.vercel.app/send-email'; // Asegúrate de usar la URL correcta

  constructor(private http: HttpClient) {}

  sendEmail(formData: FormData) {
    return this.http.post(this.apiUrl, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al enviar el correo:', error);
        return throwError(() => new Error('Error al enviar el correo, intenta nuevamente.'));
      })
    );
  }
}
