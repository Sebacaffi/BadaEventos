import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catering, Drinks, Entertainment, Music, Prevent, Site } from '../models/evento.model';
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

  getCatering(): Observable<Catering[]> {
    let endpoint = "catering/"
    return this.http.get<Catering[]>(this.url+endpoint);
  }

  getSite(): Observable<Site[]> {
    let endpoint = "site/"
    return this.http.get<Site[]>(this.url+endpoint);
  }

  getMusic(): Observable<Music[]> {
    let endpoint = "music/"
    return this.http.get<Music[]>(this.url+endpoint);
  }

  getEntertainment(): Observable<Entertainment[]> {
    let endpoint = "entertainment/"
    return this.http.get<Entertainment[]>(this.url+endpoint);
  }

  getDrinks(): Observable<Drinks[]> {
    let endpoint = "drinks/"
    return this.http.get<Drinks[]>(this.url+endpoint);
  }

  // getEventById(id: number): Observable<Prevent[]> {
  //   var query = "?id="+id
  //   return this.http.get<Prevent[]>(this.url+query);
  // }
  
}
