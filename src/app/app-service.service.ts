import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {


  url = 'https://badaeventos.herokuapp.com/market/event/'
  Event: any;

  constructor(private http: HttpClient) { }

  getEvent(search_id: string): Observable<Event> {
    return this.http.get<Event>(this.url+search_id+"/");
  }

}
