import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.serviceLogin.sendLogin(this.user).subscribe((result => {
      console.log('post de usuario', result)
      this.tokenResponse = JSON.stringify(result)
    }
    ))
  }

  getUser(name: string){
    this.user.username = name
  }

  getPass(pass: string) {
    this.user.password = pass
  }

  loginRouter(){
    if(this.tokenResponse!="") {
      this.router.navigateByUrl("/dashboard");
    }
  }

}
