import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catering, Drinks, Entertainment, Music, Prevent, Site } from '../models/evento.model';
import { Age } from '../models/evento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  urlPrevent = 'https://badaeventos.herokuapp.com/api/p-event/'
  urlDetail = 'https://badaeventos.herokuapp.com/api/pevent/'

  constructor(private http: HttpClient) {  
   }

  getEvents(): Observable<Prevent[]> {
    return this.http.get<Prevent[]>(this.urlPrevent);
  }

  getAge(): Observable<Age[]> {
    let endpoint = "public/"
    return this.http.get<Age[]>(this.urlDetail+endpoint);
  }

  getCatering(id: number): Observable<Catering[]> {
    let endpoint = "/catering/"
    return this.http.get<Catering[]>(this.urlDetail+id+endpoint);
  }

  getSite(): Observable<Site[]> {
    let endpoint = "site/"
    return this.http.get<Site[]>(this.urlDetail+endpoint);
  }

  getMusic(): Observable<Music[]> {
    let endpoint = "music/"
    return this.http.get<Music[]>(this.urlDetail+endpoint);
  }

  getEntertainment(id: number): Observable<Entertainment[]> {
    let endpoint = "/entertainment/"
    return this.http.get<Entertainment[]>(this.urlDetail+id+endpoint);
  }

  getDrinks(id: number): Observable<Drinks[]> {
    let endpoint = "/drinks/"
    return this.http.get<Drinks[]>(this.urlDetail+id+endpoint);
  }

  // getEventById(id: number): Observable<Prevent[]> {
  //   var query = "?id="+id
  //   return this.http.get<Prevent[]>(this.url+query);
  // }
  
}
