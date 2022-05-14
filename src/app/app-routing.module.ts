import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from "./admin/components/login/login.component";
// import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  // {
  //   path:'admin',
  //   component:LoginComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
