import { Component, OnInit} from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
declare var paypal;

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.scss']
})
export class DetalleReservaComponent implements OnInit{
  //----------VARIABLES USADAS EN LAS FUNCIONES-------------//

  errorMessage = '';
  eventoPago: any;
  Currency = "0";
  totalUSD = 0;
  CurrencyUSD = "0";

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
    purchase_order: "",
    status: ""
  }

  constructor(
    private service: ReservaService,
    private router: Router
  ) {}

  //-----FUNCIONES QUE SE LLAMAN AL INICIAR LA PAGE------//

  ngOnInit(): void {
    this.eventoPago = JSON.parse(localStorage.getItem('evento almacenado'))
    this.Currency = this.eventoPago.value.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
    this.totalUSD = (Math.trunc(this.eventoPago.value / 840));
    this.CurrencyUSD = this.totalUSD.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    localStorage.setItem("totalUSD", this.totalUSD.toString());
    
    //se guarda ID de evento creado en persistencia
    this.formulario.event_booking = this.eventoPago.search_id

    // Render the PayPal button into #paypal-button-container
    paypal.Buttons({

      //ESTILOS
      style: {
        color: 'blue',
        shape: 'pill',
        label: 'pay',
        height: 40
      },

      // Se pasa el valor del evento , guardado en localStorage para ser pagado en paypal
      createOrder: function (data, actions) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: localStorage.getItem('totalUSD'),
                      currency_code: 'USD'
                  }
              }]
          });
      },

      // si la transaccion finaliza me mandan el post al CUSTOMERS
      onApprove: (data, actions) =>{
        return actions.order.capture().then((orderData) =>{ 
          //se capturan los datos de la transacci??n
          var transaction = orderData.purchase_units[0].payments.captures[0];
          //se eval??a el estado de la transacci??n y se manda una alerta seg??n el caso
          if(transaction.status == "COMPLETED"){
            this.formulario.purchase_order = transaction.id
            this.formulario.status = transaction.status
            this.sendForm()
          }else{
            this.alertaErrorPost()
          }
        });
      }

    }).render('#paypal-button-container');

  }

  //------FUNCIONES PARA OBTENER Y EVNIAR DATOS---------//

  sendForm() {
    this.service.sendEventCustomer(this.formulario).subscribe(result => {
      this.errorMessage = '';
      this.alertaPago();
    }, err => {
      // Entra aqu?? si el servicio entrega un c??digo http de error EJ: 404,
      this.errorMessage = err.ok.toString();
      this.alertaEventoPagado()
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
      text: 'Su evento fue pagado con ??xito',
      confirmButtonColor:'btn-primary mx-2 shadow',
    }).then((result) => {
      if (result.isConfirmed) {
        this.navegarHome()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ){}
    })
    this.navegarHome()
  }

  alertaErrorPost(){
    Swal.fire({
      icon: 'error',
      title: 'No pudimos realizar su pago!',
      text: 'Favor de intentar nuevamente',
      confirmButtonColor:'btn-primary mx-2 shadow',
    })
  }

  alertaEventoPagado(){
    Swal.fire({
      icon: 'error',
      title: 'Su evento ya est?? pagado!',
      text: 'Revise el ID enviado a su correo',
      confirmButtonColor:'btn-primary mx-2 shadow',
    })
  }

  //------FUNCIONES DE NAVEGACI??N---------//

  //funci??n de navegaci??n HOME
  navegarHome(){
    this.router.navigateByUrl("/");
  }

}
