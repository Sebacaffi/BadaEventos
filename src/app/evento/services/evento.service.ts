import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prevent } from '../models/evento.model';
import { Age } from '../models/evento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  url = 'https://badaeventos.herokuapp.com/api/pevent/'

  constructor(private http: HttpClient) {   }

  getEvents(): Observable<Prevent[]> {
    return this.http.get<Prevent[]>(this.url);
  }

  getAge(): Observable<Age[]> {
    let endpoint = "public/"
    return this.http.get<Age[]>(this.url+endpoint);
  }

  // getEventById(id: number): Observable<Prevent[]> {
  //   var query = "?id="+id
  //   return this.http.get<Prevent[]>(this.url+query);
  // }
  
}
