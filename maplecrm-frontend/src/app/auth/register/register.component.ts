import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    if (authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls }

  onSubmit() {
    this.submitted = true;
    this.error = undefined;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.signup(this.f.name.value, this.f.email.value, this.f.password.value).
      subscribe(data => {
        this.autoLogin();
        this.loading = false;
      }, error => {
        this.loading = false;
        this.error = error;
      })
  }

  private autoLogin() {
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .subscribe(token => {
        this.router.navigate(['/']);
      }, error => {
        console.log('autologin error', error)
      });
  }

}
