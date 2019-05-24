import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  submitted = false

  spinner = false

  constructor(public formBuilder: FormBuilder, public apiCtrl: ApiService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required], // Insert all requirements here
      password: ['', Validators.required] // Same for password
    })
  }

  ngOnInit() {
  }

  get f() {
    return this.loginForm.controls
  }

  onSubmit() {
    this.submitted = true
    this.spinner = true

    if (this.loginForm.invalid) { // Here we check if all required validators are satisfied
      console.log("Error" + JSON.stringify(this.f.email.errors))
      this.spinner = false
      return
    }

    this.apiCtrl.login(this.f.email.value, this.f.password.value)
    .subscribe(response => {
      console.log(response) //Login successful jwt token is in response
    }, error => {
      console.log("something went wrong: " + JSON.stringify(error)) //Probs no internet connection
    })
  }
}
