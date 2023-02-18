import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {EventService} from "../../service/event-service";
import {AlertService} from "../../service/alert-service";
import {NgxModalxService} from "ngx-modalx";

@Component({
  selector: 'app-card-apply',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-apply.component.html',
  styleUrls: ['./card-apply.component.scss']
})
export class CardApplyComponent implements OnDestroy{

  applicationType: number = 0;
  username = "Vendég"
  subsDestroy = new Subject()


  constructor(private cdr: ChangeDetectorRef, private modal: NgxModalxService, private router: Router, private eventService: EventService, private alertService: AlertService) {
    this.eventService.currentUsername().pipe(takeUntil(this.subsDestroy)).subscribe( e => this.username = e)
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
          this.modal.close()
          //this.applying = false
        },
        error: err => {
          this.alertService.addMessage(err.errorMessage)
        }
      })
  }

  ngOnDestroy(): void {
    this.subsDestroy.next('')
    this.subsDestroy.complete()
  }

}
