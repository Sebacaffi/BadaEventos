import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { FrameDatosComponent } from './components/frame-datos/frame-datos.component';



@NgModule({
  declarations: [
    AcordeonComponent,
    FrameDatosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventoModule { }
