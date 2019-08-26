import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LoginService} from "../login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(public api: LoginService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(loginForm: HTMLFormElement) {
    this.email = loginForm.email.value;
    this.password = loginForm.password.value;
    this.api.login(this.email, this.password).subscribe(result => {
      console.log(result.token);
      localStorage.setItem('ACCESS_TOKEN', result.token);
      if (result.token) {
        this.toastr.success('Logged in successfully!');
        this.router.navigate(['home']);
      } else {
        this.toastr.error('Wrong email or password!');
      }
    });
  }
}

