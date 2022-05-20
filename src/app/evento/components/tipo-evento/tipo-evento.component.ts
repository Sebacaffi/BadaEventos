import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Prevent } from '../../models/evento.model';

@Component({
  selector: 'app-tipo-evento',
  templateUrl: './tipo-evento.component.html',
  styleUrls: ['./tipo-evento.component.scss']
})
export class TipoEventoComponent implements OnInit {

  public resultados:Prevent[] = [];

  constructor(private service: EventoService) { }

  resp = this.service.getEvents()

  ngOnInit(): void {
  }

}