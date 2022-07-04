import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  eventList = []
  eventID = ""
  event = []
  errorMessage = "";
  excelEvento: any;

  constructor(private service: LoginService) { }

  ngOnInit(): void {

    this.service.getListEvents().subscribe((eventsFromApi) =>
      this.eventList = eventsFromApi
    ), error => console.error(error)

  }

  showEvent(id: string) {
    this.emptyList()
    this.service.getEvent(id).subscribe(eventFromApi => {
      this.event.push(eventFromApi);
    }, err => {
      // Entra aquí si el servicio entrega un código http de error EJ: 404,
      this.errorMessage = err.ok.toString();
      this.alertaValidacion()
      this.listEvents()
    })
  }

  listEvents() {
    this.emptyList()
    this.service.getListEvents().subscribe((eventsFromApi) =>
      this.eventList = eventsFromApi
    ), error => console.error(error)
  }

  emptyList() {
    this.eventList = []
    this.event = []
  }

  generarExcel() {
    this.service.getExcel().subscribe(excel => {
      this.alertaReporte()
    }, error => {
      console.error(error)
      this.alertaErrorReporte()
    })
  }

  //--------ALERTAS---------//

  alertaReporte() {
    Swal.fire({
      icon: 'success',
      title: 'Se envío el reporte al correo corporativo!',
      confirmButtonColor:'btn-primary mx-2 shadow',
    })
  }

  alertaErrorReporte() {
    Swal.fire({
      icon: 'error',
      title: 'No pudimos generar el reporte!',
      text: 'Favor de intentar nuevamente',
      confirmButtonColor:'btn-primary mx-2 shadow',
    })
  }

  alertaValidacion() {
    Swal.fire({
      icon: 'error',
      title: 'Debe ingresar un ID válido!',
      text: 'Ingrese el ID nuevamente',
      confirmButtonColor:'btn-primary mx-2 shadow',
    })
  }

}