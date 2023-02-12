import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subject, takeUntil} from "rxjs";
import {EventService} from "../../service/event-service";
import {AlertService} from "../../service/alert-service";
import {FormsModule} from "@angular/forms";
import {AlertComponent} from "../../components/alert/alert.component";
import {CardEventComponent} from "../../components/card-event/card-event.component";
import {Event} from "../../type/event-type";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, FormsModule, AlertComponent, CardEventComponent],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent  implements OnInit, OnDestroy {

  currentEvent?: Event
  username: string = "Vendég"
  subsDestroy = new Subject()
  applying: boolean = false;
  applicationType: number = 0;

  constructor(private eventService: EventService, private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.getUserName()
    this.eventService.applying.asObservable().pipe(takeUntil(this.subsDestroy)).subscribe(applying => {
      this.applying = applying
    })
    this.eventService.currentEventWatch().pipe(takeUntil(this.subsDestroy)).subscribe( event => {
      this.currentEvent = event
    })
  }

  private getUserName() {
    const username = window.prompt("Mi a felhasználó neved?")
    if (username === undefined || username === null) {
      this.getUserName()
    } else {
      this.username = username
      this.eventService.setUsername(username)
    }
  }

  saveApplication() {
    let type: "0" | "1" | '2'  = "0";
    switch (this.applicationType) {
      case 1: {
        type = "1"
        break;
      }
      case 2: {
        type = "2"
        break;
      }
    }
    this.eventService.applyForCurrentEvent(this.username, type).pipe(takeUntil(this.subsDestroy)).subscribe(
      {
        next: event => {
          this.eventService.setEvent(event)
          this.applying = false
        },
        error: err => {
          this.alertService.addMessage(err.errorMessage)
        }
      })
  }

  ngOnDestroy(): void {
    this.subsDestroy.next("")
    this.subsDestroy.complete()
  }

}
