import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Response} from "../type/response-type";
import {Event} from "../type/event-type";


@Injectable({providedIn: "root"})
export class EventService {

  private baseUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  private currentEvent: BehaviorSubject<Event> = new BehaviorSubject<Event>({id: -1, date: new Date, deadline: new Date, participants: []});
  currentEventWatch(): Observable<Event> {
    return this.currentEvent.asObservable();
  }

  applying: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private username: BehaviorSubject<string> = new BehaviorSubject<string>("Vendég");
  currentUsername(): Observable<string> {
    return this.username.asObservable();
  }

  setEvent(event: Event) {
    this.currentEvent.next(event)
  }

  setUsername(name: string) {
    this.username.next(name)
  }


  public login(name: string): Observable<Response> {
    const params = new HttpParams()
      .set('name', name);

    return this.http.post<Response>(`${this.baseUrl}/events/login`, undefined, {params});
  }

  public getCurrentEvent(name: string): Observable<Event> {
    const params = new HttpParams()
      .set('name', name);

    return this.http.get<Event>(`${this.baseUrl}/events/current`, {params});
  }

  public applyForCurrentEvent(name: string, type: "0" | "1" | "2" = "0"): Observable<Event> {
    const params = new HttpParams()
      .set('name', name)
      .set('type', type);

    return this.http.post<Event>(`${this.baseUrl}/events/apply`, undefined, {params});
  }

  public deleteApplicationForCurrentEvent(name: string): Observable<Event> {
    const params = new HttpParams()
      .set('name', name);

    return this.http.delete<Event>(`${this.baseUrl}/events`, {params});
  }

}
