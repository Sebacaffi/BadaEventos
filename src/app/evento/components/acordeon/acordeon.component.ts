import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Age, Catering, Drinks, Entertainment, Music, Prevent, Site } from '../../models/evento.model';

import { loadCldr,L10n } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/de/ca-gregorian.json'),
  require('cldr-data/main/de/numbers.json'),
  require('cldr-data/main/de/timeZoneNames.json'),
  require('cldr-data/supplemental/weekdata.json'));

  L10n.load({
    de: {
  calendar: {
            today:"hoy"
   }
    }
  });

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})
export class AcordeonComponent implements OnInit {

  resultList: Prevent[];
  ageResult: Age[];
  cateringResult: Catering[];
  siteResult: Site[];
  musicResult: Music[];
  entertainmentResult: Entertainment[];
  drinksResult: Drinks[];

  constructor(private eventService: EventoService) { }

  ngOnInit(): void {

    //servicios para el consumo de la API
    this.eventService.getEvents().subscribe((eventsFromApi: Prevent[]) =>
      this.resultList = eventsFromApi
    ), error => console.error(error)
      
    this.eventService.getAge().subscribe((agesFromApi: Age[]) =>
      this.ageResult = agesFromApi
    ), console.log(this.ageResult)
    
    // error => console.error(error)

    this.eventService.getCatering().subscribe((cateringFromApi: Catering[]) =>
      this.cateringResult = cateringFromApi
    ), error => console.error(error)

    this.eventService.getSite().subscribe((siteFromApi: Site[]) =>
      this.siteResult = siteFromApi
    ), error => console.error(error)

    this.eventService.getMusic().subscribe((musicFromApi: Music[]) =>
      this.musicResult = musicFromApi
    ), error => console.error(error)

    this.eventService.getEntertainment().subscribe((entertainmentFromApi: Entertainment[]) =>
      this.entertainmentResult = entertainmentFromApi
    ), error => console.error(error)
      
    this.eventService.getDrinks().subscribe((drinksFromApi: Drinks[]) =>
       this.drinksResult = drinksFromApi
    ), error => console.error(error)
  }

  getGroup(id: number) {
    console.log(id)
  }

  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public dateValue: Object = new Date(new Date().setDate(14));
  public minDate: Object = new Date(this.currentYear, this.currentMonth, 7);
  public maxDate: Object =  new Date(this.currentYear, this.currentMonth, 27);

}
