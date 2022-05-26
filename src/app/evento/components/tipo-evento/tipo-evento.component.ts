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


  ngOnInit(): void {

    this.eventService.getEvents().subscribe((eventsFromApi: Prevent[]) =>
      this.resultList = eventsFromApi
    ), error => console.error(error)

  }

  getEventById(id: number) {
    let result = this.resultList[id-1]
    this.resultEvent = result
    localStorage.setItem("prevent",JSON.stringify(this.resultEvent))
    localStorage.setItem("id",JSON.stringify(this.resultEvent.id))
  }

}