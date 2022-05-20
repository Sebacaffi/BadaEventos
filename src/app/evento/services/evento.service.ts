import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  url = 'https://badaeventos.herokuapp.com/api/pevent/'

  constructor(private http: HttpClient) {   }

  getEvents(){
    this.http.get(this.url)
      .subscribe( resp => {
        console.log(resp)
      })
  }
  

}
