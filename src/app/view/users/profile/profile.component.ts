import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {User} from '../../../interface/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: AuthService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );
  }
}
