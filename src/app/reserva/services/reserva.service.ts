import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url = 'https://badaeventos.herokuapp.com/market/customers/'

  constructor(private http: HttpClient) { }

  sendEventCustomer(data) {
    return this.http.post(this.url, data)
  }
}
