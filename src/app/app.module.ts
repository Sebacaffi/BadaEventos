import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { EventoModule } from './evento/evento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    HomeModule,
    EventoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
