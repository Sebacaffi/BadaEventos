import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { SliderComponent } from './home/slider/slider.component';
import { FormularioContactoComponent } from './home/formulario-contacto/formulario-contacto.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { AcordeonComponent } from './evento/acordeon/acordeon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    SliderComponent,
    FormularioContactoComponent,
    NosotrosComponent,
    AcordeonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
