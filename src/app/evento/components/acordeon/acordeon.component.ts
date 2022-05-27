import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Age, Catering, Drinks, Entertainment, Music, Prevent, Site } from '../../models/evento.model';

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
  musicValue = 0;
  siteValue = 0;
  entertaimentValue = 0;
  drinksValue = 0;
  cateringValue = 0;

  totalItems = 0;

  //persistencia prevent, setear con objeto
  //prevent = JSON.parse(localStorage.getItem("prevent"))

  //crear un objeto con los datos y setear el prevent

  id = parseInt(localStorage.getItem("id"))

  constructor(private eventService: EventoService) {}

  ngOnInit(): void {

    //servicios para el consumo de la API
    this.eventService.getEvents().subscribe((eventsFromApi: Prevent[]) =>
      this.resultList = eventsFromApi
    ), error => console.error(error)
      
    this.eventService.getAge().subscribe((agesFromApi: Age[]) =>
      this.ageResult = agesFromApi
    ), error => console.error(error)

    this.eventService.getCatering(this.id).subscribe((cateringFromApi: Catering[]) =>
      this.cateringResult = cateringFromApi
    ), error => console.error(error)

    this.eventService.getSite().subscribe((siteFromApi: Site[]) =>
      this.siteResult = siteFromApi
    ), error => console.error(error)

    this.eventService.getMusic().subscribe((musicFromApi: Music[]) =>
      this.musicResult = musicFromApi
    ), error => console.error(error)

    this.eventService.getEntertainment(this.id).subscribe((entertainmentFromApi: Entertainment[]) =>
      this.entertainmentResult = entertainmentFromApi
    ), error => console.error(error)
      
    this.eventService.getDrinks(this.id).subscribe((drinksFromApi: Drinks[]) =>
       this.drinksResult = drinksFromApi
    ), error => console.error(error)
  }
  
  getGroup(id: number) {
    console.log(id)
  }

  //obtiene la selección de radioButton y seteo de valores obtenidos
  onItemChange(value, type) {
    let totalValue = 0;
    switch(type) {
      case 'music': console.log(" Value is : ", value);
        this.musicValue = value;
        break;
      case 'site': console.log(" Value is : ", value);
        this.siteValue = value;
        break;
      case 'entertainment': console.log(" Value is : ", value);
        this.entertaimentValue = value;
        break;
      case 'drinks': console.log(" Value is : ", value);
        this.drinksValue = value;
        break;
      case 'catering': console.log(" Value is : ", value);
        this.cateringValue = value;
        break;
      default: console.log(" Value is : ", value);
    }
    
    //suma valores de radioButton
    totalValue = this.musicValue + this.siteValue+ this.entertaimentValue+ this.drinksValue+ this.cateringValue;
    this.totalItems = totalValue;
    console.log("Total Items is : ", this.totalItems);
 }


}