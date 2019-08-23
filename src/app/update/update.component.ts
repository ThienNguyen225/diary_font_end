import { Component, OnInit } from '@angular/core';
import {IUser} from '../IUser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  user: IUser;
  updateUser: IUser;
  id: number;
  updateUserForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }

  get name() {
    return this.updateUserForm.get('name');
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(data => this.user = data);

    this.updateUserForm = this.fb.group({
      name: ['', [Validators.required,
        Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.updateUser = this.updateUserForm.value;
    this.userService.updateUser(this.updateUser, this.id).subscribe(
      data => this.router.navigate(['profile'])
    );
  }
}
