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

  eventID: string;
  //enviar event_type para validar y retornar el numero de id

  constructor(private router: Router, private service: AppServiceService) { }

  ngOnInit(): void {
  }

  getEvent(search_id: string) {
    this.service.getEvent(search_id).subscribe((result => {
      console.log('resultado codigo ingresado',result)
        localStorage.setItem('evento almacenado', JSON.stringify(result))
    }
    ));
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
      title: '¿Qué desea hacer con su evento?',
      text: "Seleccione si desea PAGAR o MODIFICAR su evento",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Pagar',
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
      title: 'Ingrese el ID de su evento',
      input: 'text',
      inputLabel: 'Ingrese el ID de su evento',
      inputPlaceholder: 'Ingrese el ID de su evento aquí ...',
      icon:'info',
      confirmButtonText: 'OK',
    })
    
    if(!idEvento){
      Swal.fire('Debe ingresar un ID!', '', 'error')
    }else if(idEvento){
      //get del evento por el id
      //almacenarlo en el localStorage
      //
      this.getEvent(idEvento)
      this.alertaSeguimiento()
    }
  }

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
