import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-frame-datos',
  templateUrl: './frame-datos.component.html',
  styleUrls: ['./frame-datos.component.scss']
})
export class FrameDatosComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  alertaReserva(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Desea pagar su evento ahora?',
      text: "Presione el botón GUARDAR y pague mas tarde",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Pagar',
      cancelButtonText: 'Guardar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.navegarPago()
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        this.alertaEmail()
      }
    })
  }

  async alertaEmail(){
    const { value: email } = await Swal.fire({
      title: 'Ingrese su email, enviaremos el ID de su evento',
      input: 'email',
      inputLabel: 'Use este ID para modificar o pagar su evento más tarde',
      inputPlaceholder: 'Ingrese su email aquí',
      icon:'warning'
    })
    
    if (email) {
      Swal.fire(`ID enviado a: ${email}`, '', 'success')
      this.navegarHome()
    }
  }

  navegarHome(){
    this.router.navigateByUrl("/");
  }

  navegarPago(){
    this.router.navigateByUrl("/reserva");
  }

}