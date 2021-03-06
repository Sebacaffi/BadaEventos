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
  
  //----------VARIABLES USADAS EN LAS FUNCIONES-------------//

  returnedEvent: any;
  emailEvent: string

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
  displayValue: number = 1;

  //variable donde se guarda la suma de los valores selecccionados en el acordeón
  totalItems = 0;

  //total formateado a moneda
  Currency = "0";

  //variebles de error
  errorMessage: string;

  //------------------OBJETOS-------------------------//

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
  }

  //--------LOCALSTORAGE------//

  //se guarda el ID del localStorage en una varible y así usarla para obtener los items de Catering, Drinks y Entertainment
  id = parseInt(localStorage.getItem("id"))

  //se guarda el prevent en el localStorage para ser cargado en el frame de datos y así actualizarlo
  getEvent = JSON.parse(localStorage.getItem("prevent"))

  constructor(
    private eventService: EventoService,
    private router: Router
  ) {}

  //-----FUNCIONES QUE SE LLAMAN AL INICIAR LA PAGE------//

  ngOnInit(): void {

    //se llama a la función y se le pasa el parametro del localStorage guardado en getEvent previamente
    this.setEventObject(this.getEvent)


    //------lLAMADA SERVICIOS API------//

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

  //------FUNCIONES PARA OBTENER Y EVNIAR DATOS---------//

  //función que guarda el objeto de tipo Prevent y lo guardo en un arreglo
  setEventObject(obj: Prevent) {
    this.event = obj
  }

  //funcion para get de evento reservado y seteo de valores
  getItemName(
    itemMusic: string,
    itemCatering: string,
    itemEntertainment: string,
    itemDrink: string,
    itemSite: string
    ) {
    
    if(this.selectDate == "" || this.Currency == "0" || this.cateringValue == 0 || this.entertaimentValue == 0 || this.drinksValue == 0){
      this.alertaCampos()
    }else{
      this.musicResult.forEach(( i => {
        if(i.items == itemMusic) {
          this.musicValue = i.value
          console.log('valor del resultado: ', this.musicValue)
          console.log('input: ', itemMusic)
        }
      }
      ));
      this.cateringResult.forEach(( i => {
        if(i.items == itemCatering) {
          this.cateringValue = i.value
          console.log('valor del resultado: ', this.cateringValue)
          console.log('input: ', itemCatering)
        }
      }
      ));
      this.entertainmentResult.forEach(( i => {
        if(i.items == itemEntertainment) {
          this.entertaimentValue = i.value
          console.log('valor del resultado: ', this.entertaimentValue)
          console.log('input: ', itemEntertainment)
        }
      }
      ));
      this.drinksResult.forEach(( i => {
        if(i.items == itemDrink) {
          this.drinksValue = i.value
          console.log('valor del resultado: ', this.drinksValue)
          console.log('input: ', itemDrink)
        }
      }
      ));
      this.siteResult.forEach(( i => {
        if(i.items == itemSite) {
          this.siteValue = i.value
          console.log('valor del resultado: ', this.siteValue)
          console.log('input: ', itemSite)
        }
      }
      ));
      this.postEvent()
    }
  }

  //función para envia POST de los datos del evento
  postEvent(){

    this.event.value = this.totalItems

    let finalEvent = {
      search_id: "",
      site: this.event.site.items,
      music: this.event.music.items,
      catering: this.event.event_catering.items,
      drinks: this.event.event_drinks.items,
      entertainment: this.event.event_entertainment.items,
      booking_date: this.selectDate,
      event_type: this.event.type,
      description: this.event.description,
      urlBase: this.event.urlBase,
      people: this.displayValue,
      value: this.event.value,
      created: "",
      updated: "",
    }

    this.eventService.sendEventReserved(finalEvent).subscribe(result => {
      console.log('post de evento reservado', result)
      this.returnedEvent = result
      console.log('id almacenada',this.returnedEvent.search_id)
      localStorage.setItem('evento almacenado', JSON.stringify(this.returnedEvent))
      this.alertaReserva()
    },err => {
      // Entra aquí si el servicio entrega un código http de error EJ: 404,
      this.errorMessage = err.ok.toString();
      this.alertaErrorPost()
    })
  }

  postEmail() {
    let email = {
      search_id: "",
      email: "",
    }
    let event = JSON.parse(localStorage.getItem('evento almacenado'))
    email.search_id = event.search_id

    email.email = this.emailEvent

    this.eventService.sendEmail(email).subscribe((result => {
      console.log('post de evento reservado', result)
    }
    ))
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
    this.Currency = this.totalItems.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
    }else{
      this.displayValue = 0;
    }
    
  }

  //-------ALERTAS RESERVA Y GUARDADO DE EVENTO----------//

  alertaCampos(){
    Swal.fire({
      title: 'Seleccionar Items!',
      text: "Para continuar debe seleccionar al menos un item en cada opción",
      icon: 'warning',
      allowOutsideClick: false
    })
  }

  alertaReserva(){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary mx-2 shadow',
        cancelButton: 'btn btn-secondary mx-2 shadow'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Desea pagar su evento ahora?',
      text: "Presione el botón GUARDAR y pague mas tarde",
      icon: 'question',
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonText: 'PAGAR',
      cancelButtonText: 'GUARDAR'
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
      icon:'warning',
      allowOutsideClick: false
    })
    
    if (email) {
      this.emailEvent = email
      console.log(this.emailEvent)
      this.postEmail()
      Swal.fire(`ID enviado a: ${email}`, '', 'success')
      this.navegarHome()
    }
  }

  alertaErrorPost(){
    Swal.fire({
      title: 'Error en reserva!',
      text: 'No pudimos reservar el evento, intente nuevamente',
      icon: 'error',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    })
  }

  //-----FUNCIONES DE NAVEGACIÓN-----//

  //función de navegación HOME
  navegarHome(){
    this.router.navigateByUrl("/");
  }

  //función de navegación a RESERVA
  navegarPago(){
    this.router.navigateByUrl("/reserva");
  }
}