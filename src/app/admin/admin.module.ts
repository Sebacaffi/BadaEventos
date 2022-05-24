import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from './components/account/account.component';
import { SecurityComponent } from './components/security/security.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventConfigComponent } from './components/event-config/event-config.component';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AccountComponent,
    SecurityComponent,
    CalendarComponent,
    EventConfigComponent,
    AdminNavbarComponent,
    MenuComponent,
    MultimediaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
