import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  eventList = []

  constructor(private service: LoginService) { }

  ngOnInit(): void {

    this.service.getListEvents().subscribe((eventsFromApi) =>
      this.eventList = eventsFromApi
    ), error => console.error(error)

  }

}
