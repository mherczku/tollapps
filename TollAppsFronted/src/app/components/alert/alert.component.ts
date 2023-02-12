import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Subscription} from "rxjs";
import {AlertMessage, AlertService} from "../../service/alert-service";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  messages: Array<AlertMessage> = [];
  private subs: Subscription | undefined;

  constructor(private alertService: AlertService) {
  }
  ngOnInit(): void {
    this.subs = this.alertService.watch().subscribe(messages => {
      this.messages = messages
    })
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }

}
