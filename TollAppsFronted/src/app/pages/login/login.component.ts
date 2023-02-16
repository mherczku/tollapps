import {Component} from '@angular/core';
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
export class LoginComponent {
  loginForm!: FormGroup

  constructor(private alertService: AlertService, private router: Router, private fb: FormBuilder, private eventService: EventService) {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
    })
  }

  onSubmitLogin() {
    const name = this.loginForm.value.name.trim();
    this.eventService.login(name).subscribe({
      next: _value => {
        this.eventService.setUsername(name)
        this.router.navigateByUrl("/home")
      },
      error: err =>  {
        this.alertService.addMessage(err?.error?.errorMessage?.toString())
        this.loginForm.reset()
      }
    })
  }
}
