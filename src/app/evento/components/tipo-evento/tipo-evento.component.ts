import { Component, OnInit } from '@angular/core';
import { Prevent } from '../../models/evento.model';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-tipo-evento',
  templateUrl: './tipo-evento.component.html',
  styleUrls: ['./tipo-evento.component.scss']
})
export class TipoEventoComponent implements OnInit {

  resultList: Prevent[];
  resultEvent: Prevent;

  constructor(private eventService: EventoService) {
   }

  //-----SERVICIOS QUE SE CARGAN AL INICIAR LA PAGE-----//

  ngOnInit(): void {

    //obtenemos los pre-eventos de la API
    this.eventService.getEvents().subscribe((eventsFromApi: Prevent[]) =>
      this.resultList = eventsFromApi
    ), error => console.error(error)

  }

  //-------FUNCIONES------//

  //función para obtener los pre-eventos de la API filtrando por ID
  getEventById(id: number) {

    this.resultList.forEach(event => {
      if (event.id == id) {
        this.resultEvent = event
      }
    });
    localStorage.setItem("prevent",JSON.stringify(this.resultEvent))
    localStorage.setItem("id",JSON.stringify(this.resultEvent.id))
  }

}