import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponentsComponent } from './components/evento-components/evento-components.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { CoreModule } from '../core/core.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';



@NgModule({
  declarations: [
    EventoComponentsComponent,
    AcordeonComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    CalendarModule
  ],
  exports:[
    EventoComponentsComponent
  ]
})
export class EventoModule { }
