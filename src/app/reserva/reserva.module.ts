import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponentsComponent } from './components/reserva-components/reserva-components.component';
import { DetalleReservaComponent } from './components/detalle-reserva/detalle-reserva.component';
import { EventoModule } from '../evento/evento.module';



@NgModule({
  declarations: [
    ReservaComponentsComponent,
    DetalleReservaComponent
  ],
  imports: [
    CommonModule,
    EventoModule
  ],
  exports: [
    ReservaComponentsComponent
  ]
})
export class ReservaModule { }
