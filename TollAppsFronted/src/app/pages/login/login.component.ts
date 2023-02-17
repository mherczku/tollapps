import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EventService} from "../../service/event-service";
import {Router} from "@angular/router";
import {AlertService} from "../../service/alert-service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup

  constructor(private alertService: AlertService, private router: Router, private fb: FormBuilder, private eventService: EventService) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    const username = localStorage.getItem('username')
    if(username) {
      this.login(username)
    }
  }

  onSubmitLogin() {
    const name = this.loginForm.value.name.trim();
    /*Notification.requestPermission().then(p => {
      console.log(p)
      if(p === "granted"){
        const n = new Notification('To do list', {body: "HElo helo ez egy notification"})
      }
    })*/

    this.login(name)
  }

  login(name: string) {
    this.eventService.login(name).subscribe({
      next: _value => {
        this.eventService.setUsername(name)
        localStorage.setItem('username', name);
        this.router.navigateByUrl("/home")
      },
      error: err =>  {
        this.alertService.addMessage(err?.error?.errorMessage?.toString())
        this.loginForm.reset()
      }
    })
  }
}
