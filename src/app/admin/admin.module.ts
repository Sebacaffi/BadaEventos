import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminNavbarComponent,
    MenuComponent,
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
