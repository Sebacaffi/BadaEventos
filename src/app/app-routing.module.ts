import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoComponentsComponent } from './evento/evento-components/evento-components.component';
import { HomeComponentsComponent } from './home/home-components/home-components.component';

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
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
