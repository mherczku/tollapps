import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";


export type AlertMessage = {
  id: number,
  type: "error" | "warning" | "info" | "success",
  message: string
}

@Injectable({providedIn: "root"})
export class AlertService {
  private messages: BehaviorSubject<Array<AlertMessage>> = new BehaviorSubject<Array<AlertMessage>>([]);
  watch(): Observable<Array<AlertMessage>> {
    return this.messages.asObservable();
  }
  constructor() {
  }

  addMessage(message: string, type: "error" | "warning" | "info" | "success" = "error") {
    if(message.length > 1) {
      const id = Math.floor(Math.random() * (10000000000 - 10000) ) + 10000;
      this.messages.value.unshift({type: type, message: message, id: id})
      setTimeout(
        () => {
          this.messages.value.pop()
        }, 5000);
    }
  }


}
