import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  url = 'https://badaeventos.herokuapp.com/api/pevent/site/'

  constructor(private http: HttpClient) {   }

  sendContactForm(data) {

    var post = JSON.stringify(data)
    return this.http.post(this.url, data)
  }

}
