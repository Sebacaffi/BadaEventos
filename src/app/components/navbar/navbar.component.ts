import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
      cancelButtonText: 'Modificar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.navegarPago()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ){
        this.navegarEvento()
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
