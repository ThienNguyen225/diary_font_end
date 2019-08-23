import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  accessToken: string;
  isLogin = false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (this.accessToken !== null) {
      this.isLogin = true;
    }
  }

}
