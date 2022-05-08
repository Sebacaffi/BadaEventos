import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.scss']
})
export class FormularioContactoComponent implements OnInit {

  constructor(private service: ContactoService) {
   }

  ngOnInit(): void {
  }

  getContactInputs(data: any) {

    console.log("post enviado", data)

    this.service.sendContactForm(data).subscribe((result) =>
      console.log('resultado', result)
    )
  }

  alertaEnvio(){

    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado!',
      text: 'Lo contactaremos en breve!',
      confirmButtonColor:'#B94F37',
    })
  }
}
