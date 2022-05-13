import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordeonComponent } from './acordeon/acordeon.component';
import { FrameDatosComponent } from './frame-datos/frame-datos.component';



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
