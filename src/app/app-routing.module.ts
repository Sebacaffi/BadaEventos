import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoComponentsComponent } from './evento/components/evento-components/evento-components.component';
import { HomeComponentsComponent } from './home/components/home-components/home-components.component';
import { ReservaComponentsComponent } from './reserva/components/reserva-components/reserva-components.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponentsComponent
  },
  {
    path:'evento',
    component: EventoComponentsComponent
  },
  {
    path:'reserva',
    component: ReservaComponentsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
