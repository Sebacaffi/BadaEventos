import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from './components/account/account.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SecurityComponent } from './components/security/security.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventConfigComponent } from './components/event-config/event-config.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AccountComponent,
    PaymentComponent,
    SecurityComponent,
    CarouselComponent,
    CalendarComponent,
    EventConfigComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
