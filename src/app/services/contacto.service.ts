import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  url = 'https://badaeventos.herokuapp.com/api/contact/'

  constructor(private http: HttpClient) { }

  sendContactForm(data: any) {
    return this.http.post(this.url, data)
  }

}
