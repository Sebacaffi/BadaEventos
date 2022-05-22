import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Age, Prevent } from '../../models/evento.model';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})
export class AcordeonComponent implements OnInit {

  resultList: Prevent[];
  ageResult: Age[];

  constructor(private eventService: EventoService) { }

  ngOnInit(): void {

    this.eventService.getEvents().subscribe((eventsFromApi: Prevent[]) =>
    this.resultList = eventsFromApi
  ), error => console.error(error)
    
    this.eventService.getAge().subscribe((agesFromApi: Age[]) =>
    this.ageResult = agesFromApi
  ), error => console.error(error)
  
  }

}
