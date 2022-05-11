import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { SliderComponent } from './home/slider/slider.component';
import { FormularioContactoComponent } from './home/formulario-contacto/formulario-contacto.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    SliderComponent,
    FormularioContactoComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
