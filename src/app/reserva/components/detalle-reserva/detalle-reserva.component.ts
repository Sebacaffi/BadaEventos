import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.scss']
})
export class DetalleReservaComponent implements OnInit {

  //----------VARIABLES USADAS EN LAS FUNCIONES-------------//

  errorMessage = '';
  eventoPago: any;
  Currency = "0";

  //------------------OBJETOS-------------------------//

  formulario = {
    id: 0, //evaluar post del cero
    name: "",
    last_name: "",
    email: "",
    rut: "",
    phone: "",
    address: "",
    city: "",
    created: "",
    event_booking: "",
  }

  constructor(
    private service: ReservaService,
    private router: Router
  ) {}

  //-----FUNCIONES QUE SE LLAMAN AL INICIAR LA PAGE------//

  ngOnInit(): void {
    this.eventoPago = JSON.parse(localStorage.getItem('evento almacenado'))
    this.Currency = this.eventoPago.value.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'}).replace('.00', '').replace(',', '.').replace(',', '.');
    
    //se guarda ID de evento creado en persistencia
    this.formulario.event_booking = this.eventoPago.search_id
  }

  //------FUNCIONES PARA OBTENER Y EVNIAR DATOS---------//
  sendForm() {
    this.service.sendEventCustomer(this.formulario).subscribe(result => {
      this.errorMessage = '';
      this.alertaPago()
    }, err => {
      // Entra aquí si el servicio entrega un código http de error EJ: 404,
      this.errorMessage = err.ok.toString();
      this.alertaErrorPost()
      this.navegarHome()
    })
  }

  //se recuperan los datos de los INPUT del HTML
  getNombre(nombres:string){
    this.formulario.name = nombres
  } 

  getApellidos(apellidos:string){
    this.formulario.last_name = apellidos
  }

  getEmail(email:string){
    this.formulario.email = email
  }

  getRun(rut:string){
    this.formulario.rut = rut
  }

  getTelefono(telefono:string){
    this.formulario.phone = telefono
  }

  getComuna(comuna:string){
    this.formulario.city = comuna
  }

  getDireccion(direccion:string){
    this.formulario.address = direccion
  }

  //------ALERTAS DE CONFIRMACION DE PAGO---------//

  alertaPago(){
    Swal.fire({
      icon: 'success',
      title: 'Pago realizado!',
      text: 'Su evento fue pagado con éxito',
      confirmButtonColor:'btn-primary mx-2 shadow',
    }
    )
    this.navegarHome()
  }

  alertaErrorPost(){
    Swal.fire({
      title: 'Este evento ya fue pagado!',
      text: 'Por favor revise el ID enviado a su correo electrónico e intente nuevamente',
      icon: 'error',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    })
  }

  //------FUNCIONES DE NAVEGACIÓN---------//

  //función de navegación HOME
  navegarHome(){
    this.router.navigateByUrl("/");
  }
}
