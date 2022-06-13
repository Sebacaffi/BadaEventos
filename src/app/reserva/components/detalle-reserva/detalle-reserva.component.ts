import { Component, OnInit} from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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

      // Se setea el valor del evento para ser pagado en paypal
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
      onApprove: function (data, actions) {
          return actions.order.capture().then(function (orderData) { 
              // Successful capture! For demo purposes:
              var transaction = orderData.purchase_units[0].payments.captures[0];
              alert('Transaction ' + transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
              localStorage.setItem('transaction', JSON.stringify(transaction.status));
          });
      }

    }).render('#paypal-button-container');

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

  recargarPage(){
    window.location.reload();
  }

}
