import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: "",
    password: "",
  }

  tokenResponse = ""

  constructor(private serviceLogin: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  postUser() {
    this.serviceLogin.login(this.user).subscribe(result => {
      console.log('post de usuario', result)
      this.tokenResponse = JSON.stringify(result)
      if(this.tokenResponse != "") {
        this.router.navigateByUrl("/dashboard");
        this.alertaLogin();
      }
    }, err => {
      console.log('error', err)
      
      Swal.fire({
        icon: 'error',
        title: 'Credenciales no valida!',
        text: 'Favor de intentar nuevamente',
        confirmButtonColor:'btn-primary mx-2 shadow',
      })
    }
    )
  }

  getUser(name: string){
    this.user.username = name
  }

  getPass(pass: string) {
    this.user.password = pass
  }
  
  alertaLogin() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenido Administrador',
      showConfirmButton: false,
      timer: 1500,
      toast: true
    })
  }
}
