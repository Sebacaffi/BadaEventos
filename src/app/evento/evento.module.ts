import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponentsComponent } from './components/evento-components/evento-components.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    EventoComponentsComponent,
    AcordeonComponent,
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[
    EventoComponentsComponent
  ]
})
export class EventoModule { }
