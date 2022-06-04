import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';
import { Catering, Drinks, Entertainment, Music, Prevent, Site } from '../../models/evento.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.scss']
})
export class AcordeonComponent implements OnInit {
  
  //variables usadas en los servicios para el llamado y guardado de los datos
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

  //variable que guarda la fecha formateada
  selectDate = "";

  //variables usadas en el HTML para obtener el dato ingresado desde el input y calcular el totalItems
  //se asigna 1 para no dar valores en 0 al no ingresar nada en el input
  displayValue: number =1;

  //variable donde se guarda la suma de los valores selecccionados en el acordeón
  totalItems = 0;

  //total formateado a moneda
  Currency = "0";

  //se crea un objeto para almacenar los datos del evento predefinido y obtenidos del localStorage en getEvent
  event = {
    id: null,
    site: null,
    music: null,
    event_catering: null,
    event_drinks: null,
    event_entertainment: null,
    type: null,
    description: null,
    urlBase: null,
    value: null,
    // date: null,
    // state: null,
    // idEvent: null
  }

  //se guarda el ID del localStorage en una varible y así usarla para obtener los items de Catering, Drinks y Entertainment
  id = parseInt(localStorage.getItem("id"))

  //se guarda el prevent en el localStorage para ser cargado en el frame de datos y así actualizarlo
  getEvent = JSON.parse(localStorage.getItem("prevent"))

  constructor(
    private eventService: EventoService,
    private router: Router
  ) {}

  ngOnInit(): void {

    //se llama a la función y se le pasa el parametro del localStorage guardado en getEvent previamente
    this.setEventObject(this.getEvent)
    
    //se llama a los servicios para obtener los items de cada categoria
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

  //función que guarda el objeto de tipo Prevent y lo guardo en un arreglo
  setEventObject(obj: Prevent) {
    this.event = obj
  }

  //función que recupera la fecha seleccionada en el calendario y la formatea
  getDate(date: string){
    let anno = date.substring(0,4);
    let mes = date.substring(5,7);
    let dia = date.substring(8,10);
    if(mes == "01"){
      mes = "Enero";
    }else if(mes == "02"){
      mes = "Febrero";
    }else if(mes == "03"){
      mes = "Marzo";
    }else if(mes == "04"){
      mes = "Abril";
    }else if(mes == "05"){
      mes = "Mayo";
    }else if(mes == "06"){
      mes = "Junio";
    }else if(mes== "07"){
      mes = "Julio";
    }else if(mes == "08"){
      mes = "Agosto";
    }else if(mes == "09"){
      mes = "Septiembre";
    }else if(mes == "10"){
      mes = "Octubre";
    }else if(mes == "11"){
      mes = "Noviembre";
    }else if(mes == "12"){
      mes = "Diciembre";
    }
    this.selectDate = dia + ' de ' + mes + ' del ' + anno;
  }

  //función que obtiene la selección de radioButton y guarda en el localStorage
  onItemChange(value, type, object) {
      //se evalúa la opción seleccionada en el radioButton, guardado value y el object que se pasan desde el HTML
      switch(type) {
      case 'music':
        this.musicValue = value;
        this.event.music = object
        break;
      case 'site':
        this.siteValue = value;
        this.event.site = object
        break;
      case 'entertainment':
        this.entertaimentValue = value;
        this.event.event_entertainment = object
        break;
      case 'drinks':
        this.drinksValue = value; 
        this.event.event_drinks = object
        break;
      case 'catering':
        this.cateringValue = value;
        this.event.event_catering = object
        break;
    }
    
    //se modifica el localStorage para actualizar el vista de los datos en el frame según la selección
    localStorage.setItem("prevent", JSON.stringify(this.event));
    
    //se calcula el total de los items seleccionados llamando a la función de calculos
    this.calcularTotal(this.displayValue.toString())
  }

  //función que recibe la cantidad de invitados y calcula el total de los items seleccionados. Valida que sea mayor a 0
  calcularTotal(val:string){

   this.displayValue = parseInt(val);
   if (this.displayValue > 0){
    this.totalItems = this.musicValue + this.siteValue+ this.entertaimentValue+ (this.drinksValue*this.displayValue)+ (this.cateringValue*this.displayValue);
    this.Currency = this.totalItems.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'}).replace('.00', '').replace(',', '.');
   }else{
     this.displayValue = 0;
   }
   
  }
//seteo de finalEvent
setEvent() {
  //todo set event
}

//funcion para get de evento reservado y seteo de valores
getItemName(item: string) {

  this.musicResult.forEach(( i => {
    if(i.items == item) {
      this.musicValue = i.value
      console.log('valor del resultado: ', this.musicValue)
      console.log('input: ', item)
    }else {
      console.log("elemento incorrecto")
      console.log('input:', i.items)
    }
  }
  ));
  
}
//-------------------------ALERTAS RESERVA Y GUARDADO DE EVENTO----------------------------------------
 alertaReserva(){

  this.event.value = this.totalItems

  console.log(this.event)

  let finalEvent = {
    site: this.event.site.items,
    music: this.event.music.items,
    catering: this.event.event_catering.items,
    drinks: this.event.event_drinks.items,
    entertainment: this.event.event_entertainment.items,
    customer: null,
    state: null,
    booking_date: this.selectDate,
    event_type: this.event.type,
    description: this.event.description,
    urlBase: this.event.urlBase,
    people: this.displayValue,
    value: this.event.value,
  }

  this.eventService.sendEventReserved(finalEvent).subscribe((result =>
      console.log('post de evento reservado', result)
    ))

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

//función de navegación HOME
navegarHome(){
  this.router.navigateByUrl("/");
}

//función de navegación a RESERVA
navegarPago(){
  this.router.navigateByUrl("/reserva");
}

}