import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: any;
  token: string;
  isLogin = false;

  constructor(
    private api: AuthService,
  ) {
  }

  ngOnInit() {
    this.getprofile();
    this.token = localStorage.getItem('ACCESS_TOKEN');
    if (this.token !== null) {
      this.isLogin = true;
    }
  }
  getprofile() {
    this.api.getprofile().subscribe(result => {
      console.log(this.data);
      this.data = result;
    });
  }
}

