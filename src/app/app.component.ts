import { Component } from '@angular/core';
import { ContactoService } from './home/services/contacto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ContactoService]
})
export class AppComponent {
  title = 'badaEventos';

}
