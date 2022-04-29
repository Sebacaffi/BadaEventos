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
    console.log(data)

    this.service.sendContactForm(data).subscribe((result) =>
      console.log(result)
    )
  }

}
