import { Component, OnInit } from '@angular/core';
import {IUser} from '../IUser';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: IUser;

  constructor(private userService: UserService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(1).subscribe(
      data => {
        this.user = data;
      }
    );
  }
}
