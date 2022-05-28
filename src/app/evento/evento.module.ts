import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponentsComponent } from './components/evento-components/evento-components.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { FrameDatosComponent } from './components/frame-datos/frame-datos.component';
import { RouterModule } from '@angular/router';
import { TipoEventoComponent } from './components/tipo-evento/tipo-evento.component';


@NgModule({
  declarations: [
    EventoComponentsComponent,
    AcordeonComponent,
    FrameDatosComponent,
    TipoEventoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    EventoComponentsComponent,
    FrameDatosComponent
  ]
})
export class EventoModule { }
