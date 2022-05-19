import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponentsComponent } from './components/reserva-components/reserva-components.component';
import { DetalleReservaComponent } from './components/detalle-reserva/detalle-reserva.component';
import { ResumenReservaComponent } from './components/resumen-reserva/resumen-reserva.component';



@NgModule({
  declarations: [
    ReservaComponentsComponent,
    DetalleReservaComponent,
    ResumenReservaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReservaComponentsComponent
  ]
})
export class ReservaModule { }
