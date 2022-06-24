import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  eventList = []
  eventID = ""
  event = []

  constructor(private service: LoginService) { }

  ngOnInit(): void {

    this.service.getListEvents().subscribe((eventsFromApi) =>
      this.eventList = eventsFromApi
    ), error => console.error(error)

  }

  showEvent(id: string) {
    this.emptyList()
    this.service.getEvent(id).subscribe((eventFromApi) =>
      this.event.push(eventFromApi)
    ), error => console.error(error)
  }

  listEvents() {
    this.emptyList()
    this.service.getListEvents().subscribe((eventsFromApi) =>
      this.eventList = eventsFromApi
    ), error => console.error(error)
  }

  emptyList() {
    this.eventList = []
    this.event = []
  }

}
