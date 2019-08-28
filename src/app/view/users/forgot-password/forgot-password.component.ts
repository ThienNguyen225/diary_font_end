import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../../interface/user.interface';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  user: User;
  passwordForm: FormGroup;


  constructor(private userService: AuthService, private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute, private router: Router,
              private toastr: ToastrService) {
  }

  get current_password() {
    return this.passwordForm.get('current_password');
  }

  get new_password() {
    return this.passwordForm.get('new_password');
  }

  get new_password_confirmation() {
    return this.passwordForm.get('new_password_confirmation');
  }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      current_password: ['', [Validators.required, Validators.minLength(6)]],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      new_password_confirmation: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const value = this.passwordForm.value;
    this.userService.chengePassword(value).subscribe(
      data => {
        if (typeof data.error === 'undefined') {
          this.toastr.success('thay đổi mật khẩu thành công');
          this.router.navigate(['/page/home']);
        } else {
          this.toastr.error('sai mật khẩu');
        }

      }
    );

  }
}
