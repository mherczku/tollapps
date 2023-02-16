import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Event} from "../../type/event-type";
import {Subject, takeUntil, timeout} from "rxjs";
import {EventService} from "../../service/event-service";
import {AlertService} from "../../service/alert-service";

@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss']
})
export class CardEventComponent implements OnInit, OnDestroy {

  subsDestroy = new Subject()
  _currentEvent: Event = {
    id: -1,
    date: new Date(),
    deadline: new Date(),
    participants: []
  }
  deadLined: boolean = false;

  applied: boolean = false;
  username: string = ""

  constructor(private eventService: EventService, private alertService: AlertService) {
    eventService.currentUsername().pipe(takeUntil(this.subsDestroy)).subscribe( username => {
      this.username = username
    })
    eventService.currentEventWatch().pipe(takeUntil(this.subsDestroy)).subscribe( event => {
      this._currentEvent = event
      this.checkDeadLine()
      this.checkApplication()
    })
  }

  ngOnInit() {
    this.getCurrentEventData()
    this.eventService.subscribe()
  }

  private checkDeadLine() {
    this.deadLined = new Date(this._currentEvent.deadline) <= new Date(Date.now())
    this.deadLined = false
  }

  checkApplication() {
    let applied = false
    this._currentEvent.participants.forEach(p => {
      if (p.includes(this.username)) {
        applied = true
      }
    })
    this.applied = applied
  }

  private getCurrentEventData() {
    this.eventService.getCurrentEvent(this.username).pipe(timeout(2000)).pipe(takeUntil(this.subsDestroy)).subscribe(
      {
        next: event => {
          this.eventService.setEvent(event)
        },
        error: err => {
          if (err?.error?.errorMessage) {
            this.alertService.addMessage(err.error.errorMessage)
          } else {
            this.alertService.addMessage("A szerver nem elérhető, kérlek probálkozz később!")
          }
        }
      }
    )
  }

  applyBtnClicked() {
    if (this.applied) {
      const sure = window.confirm("Biztosan törlöd a jelentkezésed?")
      if (sure) {
        this.eventService.deleteApplicationForCurrentEvent(this.username).pipe(takeUntil(this.subsDestroy)).subscribe(
          {
            next: event => {
              this.eventService.setEvent(event)
            },
            error: err => {
              this.alertService.addMessage(err.errorMessage)
            }
          })
      }
    } else {
      this.eventService.applying.next(true)
    }
  }

  ngOnDestroy(): void {
    this.subsDestroy.next("")
    this.subsDestroy.complete()
    this.eventService.closeSubscription()
  }


}
