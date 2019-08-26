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
  updateForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private userService: AuthService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
              private toastr: ToastrService) {
  }

  get name() {
    return this.updateForm.get('name');
  }


  ngOnInit() {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
  }

  onSubmit() {
    const value = this.updateForm.value;
    this.userService.update(value).subscribe(
      data => {
        this.toastr.success('Cập nhật thành công');
        this.router.navigate(['profile/me']);
      }
    );
  }
}
