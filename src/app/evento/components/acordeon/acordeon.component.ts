import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { Age, Catering, Drinks, Entertainment, Music, Prevent, Site } from '../../models/evento.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})
export class AcordeonComponent implements OnInit {

  DateSelected: any
  onDateChange() {
    console.log(this.DateSelected)
  }
  
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

  event = {
    id: null,
    group: null,
    site: null,
    music: null,
    event_catering: null,
    event_drinks: null,
    event_entertainment: null,
    type: null,
    description: null,
    urlBase: null,
    value: null
  }

  id = parseInt(localStorage.getItem("id"))
  getEvent = JSON.parse(localStorage.getItem("prevent"))

  constructor(
    private eventService: EventoService,
    private router: Router
    ) {}

  ngOnInit(): void {

    this.setEventObject(this.getEvent)
    console.log(this.event.id)
      
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

  setEventObject(obj: Prevent) {
    this.event = obj
    
  }

  //obtiene la selección de radioButton y seteo de valores obtenidos
  onItemChange(value, type, object) {
    let totalValue = 0;
    switch(type) {
      case 'music': console.log(" Value is : ", value);
        this.musicValue = value;
        this.event.music = object
        break;
      case 'site': console.log(" Value is : ", value);
        this.siteValue = value;
        this.event.site = object
        break;
      case 'entertainment': console.log(" Value is : ", value);
        this.entertaimentValue = value;
        this.event.event_entertainment = object
        break;
      case 'drinks': console.log(" Value is : ", value);
        this.drinksValue = value;
        this.event.event_drinks = object
        break;
      case 'catering': console.log(" Value is : ", value);
        this.cateringValue = value;
        this.event.event_catering = object
        break;
      default: console.log(" Value is : ", value);
    }
    
    localStorage.setItem("prevent", JSON.stringify(this.event));
    //suma valores de radioButton
    totalValue = this.musicValue + this.siteValue+ this.entertaimentValue+ this.drinksValue+ this.cateringValue;
    this.totalItems = totalValue;

    console.log("Total Value is : ", totalValue);
    console.log("Total Items is : ", this.totalItems);
 }
//-----------------------------------------------------------------
 alertaReserva(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: '¿Desea pagar su evento ahora?',
    text: "Presione el botón GUARDAR y pague mas tarde",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Pagar',
    cancelButtonText: 'Guardar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.navegarPago()
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ){
      this.alertaEmail()
    }
  })
}

async alertaEmail(){
  const { value: email } = await Swal.fire({
    title: 'Ingrese su email, enviaremos el ID de su evento',
    input: 'email',
    inputLabel: 'Use este ID para modificar o pagar su evento más tarde',
    inputPlaceholder: 'Ingrese su email aquí',
    icon:'warning'
  })
  
  if (email) {
    Swal.fire(`ID enviado a: ${email}`, '', 'success')
    this.navegarHome()
  }
}

navegarHome(){
  this.router.navigateByUrl("/");
}

navegarPago(){
  this.router.navigateByUrl("/reserva");
}

}