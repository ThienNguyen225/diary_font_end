import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accessToken: string;
  isLogin = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (this.accessToken !== null) {
      this.isLogin = true;
    }
  }

  logout($event: MouseEvent) {
    event.preventDefault();
    localStorage.removeItem('ACCESS_TOKEN');
    this.accessToken = null;
    this.isLogin = false;
    this.router.navigate(['']);
  }
}
