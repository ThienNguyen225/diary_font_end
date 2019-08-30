import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public api: AuthService,
              private toastr: ToastrService,
              private router: Router) {
  }

  isCheckLogin: boolean = false;

  ngOnInit() {
  }

  login(loginForm: HTMLFormElement) {
    this.email = loginForm.email.value;
    this.password = loginForm.password.value;
    this.api.login(this.email, this.password).subscribe(result => {
      localStorage.setItem('ACCESS_TOKEN', result.token);
      this.isCheckLogin = true;
    });
    if (this.isCheckLogin) {
      this.toastr.success('Success login!');
      this.router.navigate(['page/home']);
    } else {
      this.toastr.error('Fail login!');
    }
  }
}

