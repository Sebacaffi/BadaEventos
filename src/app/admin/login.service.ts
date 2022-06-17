import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://badaeventos.herokuapp.com/account/token/"

  constructor(private http: HttpClient) { }

  sendLogin(data) {
    return this.http.post(this.url, data)
  }

  login(data): Observable<any> {
    return this.http.post<any>(this.url, data);
  }
}
