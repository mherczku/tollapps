import {Component, OnDestroy, OnInit, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Event} from "../../type/event-type";
import {Subject, takeUntil, timeout} from "rxjs";
import {EventService} from "../../service/event-service";
import {AlertService} from "../../service/alert-service";
import {NgxModalxService} from "ngx-modalx";
import {CardApplyComponent} from "../card-apply/card-apply.component";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-card-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0, height: 0}),
          stagger(300, [
            animate('0.3s', style({opacity: 1, height: '*'}))
          ])
        ], {optional: true}),
        query(':leave', [
          style({opacity: 1, height: '*'}),
          stagger(300, [
            animate('0.3s', style({opacity: 0, height: 0}))
          ])
        ], {optional: true})
      ])
    ])
  ]
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

  constructor(private eventService: EventService, private alertService: AlertService, private modalService: NgxModalxService) {
    eventService.currentUsername().pipe(takeUntil(this.subsDestroy)).subscribe(username => {
      this.username = username
    })
    eventService.currentEventWatch().pipe(takeUntil(this.subsDestroy)).subscribe(event => {
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
      this.modalService.open(CardApplyComponent as Type<Component>)
    }
  }

  ngOnDestroy(): void {
    this.subsDestroy.next("")
    this.subsDestroy.complete()
    this.eventService.closeSubscription()
  }


}
