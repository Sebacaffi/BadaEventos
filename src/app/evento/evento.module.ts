import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponentsComponent } from './components/evento-components/evento-components.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { CoreModule } from '../core/core.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FrameDatosComponent } from './components/frame-datos/frame-datos.component';
import { RouterModule } from '@angular/router';
import { TipoEventoComponent } from './components/tipo-evento/tipo-evento.component';


@NgModule({
  declarations: [
    EventoComponentsComponent,
    AcordeonComponent,
    FrameDatosComponent,
    TipoEventoComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    CalendarModule,
    RouterModule
  ],
  exports:[
    EventoComponentsComponent
  ]
})
export class EventoModule { }
