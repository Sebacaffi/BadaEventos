import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoComponentsComponent } from './evento/components/evento-components/evento-components.component';
import { HomeComponentsComponent } from './home/components/home-components/home-components.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponentsComponent
  },
  {
    path:'evento',
    component: EventoComponentsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
