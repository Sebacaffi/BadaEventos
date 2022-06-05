import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  //-----URL EDPOINT API-----//
  url = 'https://badaeventos.herokuapp.com/api/contact/'

  constructor(private http: HttpClient) {   }

  //Post para enviar el formulario de contacto
  sendContactForm(data) {

    return this.http.post(this.url, data)
  }

}