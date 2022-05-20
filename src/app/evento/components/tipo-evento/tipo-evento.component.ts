import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Pevent } from '../../models/evento.model';

@Component({
  selector: 'app-tipo-evento',
  templateUrl: './tipo-evento.component.html',
  styleUrls: ['./tipo-evento.component.scss']
})
export class TipoEventoComponent implements OnInit {

  public resultados:Pevent[] = [];

  constructor(private service: EventoService) { }

  ngOnInit(): void {
    this.service.getEvents()
  }

}