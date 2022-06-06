import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  //variable par manejar error BAD REQUEST
  errorMessage = '';
  idEvento: string;

  eventID: string;
  //enviar event_type para validar y retornar el numero de id

  constructor(private router: Router, private service: AppServiceService) { }

  ngOnInit(): void {
  }

  getEvent(search_id: string) {
    this.service.getEvent(search_id).subscribe(result => {
      // Entra aquí con respuesta del servicio correcta código http 200
      localStorage.setItem('evento almacenado', JSON.stringify(result))
      this.errorMessage = '';
      this.alertaSeguimiento()
    }, err => {
      // Entra aquí si el servicio entrega un código http de error EJ: 404,
      this.errorMessage = err.ok.toString();
      this.alertaIDInvalido()
    })
  }

  //------------ALERTAS----------------//

  alertaIDInvalido(){
    Swal.fire({
      title: 'ID Inválido',
      text: 'El ID ingresado no es válido',
      icon: 'error',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    })
  }

  alertaSeguimiento(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary mx-2 shadow',
        cancelButton: 'btn btn-secondary mx-2 shadow'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Encontramos su Evento!',
      text: 'Presione PAGAR para finalizar el proceso',
      icon: 'success',
      confirmButtonText: 'Pagar',
      allowOutsideClick: false,
      showCloseButton: true
      //cancelButtonText: 'Modificar',
    }).then((result) => {
      if (result.isConfirmed) {
        //verificar que los datos que llegan son los correctos del localStorage
        //cargar en el detalle
        this.navegarPago()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ){
        //verificar que los datos que llegan son los correctos del localStorage
        //cargar en el detalle
        //cargar el acordeon con el id, get desde el tipo de evento y que retorne el id
        //PUT del evento por el id
        //this.navegarEvento()
      }
    })
  }

  async alertaID(){
    const { value: idEvento } = await Swal.fire({
      title: 'Busque su Evento',
      input: 'text',
      inputLabel: 'Ingrese el ID de su evento',
      inputPlaceholder: 'Ingrese el ID de su evento aquí ...',
      icon:'info',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    })
    
    if(!idEvento){
      Swal.fire('Debe ingresar un ID!', '', 'error')
    }if(idEvento){
      this.idEvento = idEvento
      this.getEvent(this.idEvento)
    }
  }

  //------------NAVEGACIÓN----------------//

  navegar404(){
    this.router.navigateByUrl('/notFound')
  }

  navegarEvento(){
    this.router.navigateByUrl('/evento')
  }

  navegarPago(){
    this.router.navigateByUrl("/reserva");
  }
}
