import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.scss']
})
export class DetalleReservaComponent implements OnInit {

  eventoPago: any;

  constructor() { }

  ngOnInit(): void {
    this.eventoPago = JSON.parse(localStorage.getItem('evento almacenado'))
    console.log('eventoPago', this.eventoPago)
  }

}
