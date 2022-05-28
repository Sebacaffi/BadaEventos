import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponentsComponent } from './components/home-components/home-components.component';
import { HeroComponent } from './components/hero/hero.component';
import { SliderComponent } from './components/slider/slider.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';




@NgModule({
  declarations: [
    HomeComponentsComponent,
    HeroComponent,
    SliderComponent,
    NosotrosComponent,
    FormularioContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HomeComponentsComponent
  ]
})
export class HomeModule { }
