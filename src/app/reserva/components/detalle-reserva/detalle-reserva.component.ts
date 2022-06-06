import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.scss']
})
export class DetalleReservaComponent implements OnInit {

  eventoPago: any;
  Currency = "0";
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

  constructor(private service: ReservaService) { }

  ngOnInit(): void {
    this.eventoPago = JSON.parse(localStorage.getItem('evento almacenado'))
    console.log('eventoPago', this.eventoPago)
    this.Currency = this.eventoPago.value.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'}).replace('.00', '');
    this.Currency = this.Currency.replace(',', '.');
    
  }
  sendForm() {
    this.service.sendEventCustomer(this.formulario).subscribe((result => {
      console.log('customer enviado: ', result)
    }
    ))
  }

}
