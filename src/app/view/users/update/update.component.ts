import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../interface/user.interface';
import {AuthService} from '../../../service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  user: User;
  name: string;
  phone: number;
  address: string;
  age: number;

  constructor(private userService: AuthService, private fb: FormBuilder, private activatedRoute:
                ActivatedRoute, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
  }

  onSubmit(updateForm: HTMLFormElement) {
    // this.name = updateForm.name.value;
    this.phone = updateForm.phone.value;
    this.address = updateForm.address.value;
    this.age = updateForm.age.value;
    this.userService.update(this.name, this.phone, this.address, this.age).subscribe(
      data => {
        this.toastr.success('Cập nhật thành công');
        this.router.navigate(['profile/me']);
      }
    );
  }
}
