import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { EventoModule } from './evento/evento.module';
import { AppRoutingModule } from './app-routing.module';
import { ReservaModule } from './reserva/reserva.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule,
    HomeModule,
    EventoModule,
    ReservaModule,
    AppRoutingModule,
    AdminModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
