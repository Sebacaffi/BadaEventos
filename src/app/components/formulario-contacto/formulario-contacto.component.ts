import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';

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

}
