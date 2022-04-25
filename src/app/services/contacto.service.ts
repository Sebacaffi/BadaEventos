import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  constructor() { }

  enviarContacto(contacto: Contacto) {
    return new Promise<any> (resolve, reject) => {
      //TODO
    }
  }
}
