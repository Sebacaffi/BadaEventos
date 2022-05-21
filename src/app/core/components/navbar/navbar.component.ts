import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async alertaSeguimiento(){

    const { value: idEvento } = await Swal.fire({
      
      title: 'Revise el estado de tu evento',
      input: 'text',
      inputLabel: 'Ingrese el ID de su evento',
      showCancelButton: true
    })

    if(idEvento){
      this.navegar404()
    }else{
      Swal.fire('Debe ingresar un ID!', '', 'error')
    }
  }  

  navegar404(){
    this.router.navigateByUrl('/notFound')
  }

}
