import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponentsComponent } from './components/evento-components/evento-components.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { RouterModule } from '@angular/router';
import { TipoEventoComponent } from './components/tipo-evento/tipo-evento.component';


@NgModule({
  declarations: [
    EventoComponentsComponent,
    AcordeonComponent,
    TipoEventoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    EventoComponentsComponent
  ]
})
export class EventoModule { }
