import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subject, takeUntil} from "rxjs";
import {EventService} from "../../service/event-service";
import {FormsModule} from "@angular/forms";
import {CardEventComponent} from "../../components/card-event/card-event.component";
import {Event} from "../../type/event-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, FormsModule, CardEventComponent],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent  implements OnInit, OnDestroy {

  currentEvent?: Event
  username: string = "Vendég"
  subsDestroy = new Subject()

  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.currentEventWatch().pipe(takeUntil(this.subsDestroy)).subscribe( event => {
      this.currentEvent = event
    })
    this.eventService.currentUsername().pipe(takeUntil(this.subsDestroy)).subscribe( e => this.username = e)
  }


  ngOnDestroy(): void {
    this.subsDestroy.next("")
    this.subsDestroy.complete()
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl("login");
  }
}
