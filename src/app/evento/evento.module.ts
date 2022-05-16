import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponentsComponent } from './components/evento-components/evento-components.component';



@NgModule({
  declarations: [
    EventoComponentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EventoComponentsComponent
  ]
})
export class EventoModule { }
