import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {EventService} from "../../service/event-service";

@Component({
  selector: 'app-card-calculator',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './card-calculator.component.html',
  styleUrls: ['./card-calculator.component.scss']
})
export class CardCalculatorComponent {
  priceSum: number = 4000;
  quantity: number = 0;

  constructor(private eventService: EventService) {
    this.quantity = eventService.quantityOfPeople
  }

}
