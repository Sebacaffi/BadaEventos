import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponentsComponent } from './home-components/home-components.component';



@NgModule({
  declarations: [
    HomeComponentsComponent
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
