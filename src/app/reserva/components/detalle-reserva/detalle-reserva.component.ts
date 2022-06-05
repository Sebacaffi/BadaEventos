import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.scss']
})
export class DetalleReservaComponent implements OnInit {

  eventoPago: any;
  Currency = "0";

  constructor() { }

  ngOnInit(): void {
    this.eventoPago = JSON.parse(localStorage.getItem('evento almacenado'))
    console.log('eventoPago', this.eventoPago)
    this.Currency = this.eventoPago.value.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'}).replace('.00', '');
    this.Currency = this.Currency.replace(',', '.');
  }

  


}
