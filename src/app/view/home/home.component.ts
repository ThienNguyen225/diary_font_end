import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../interface/user.interface';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  accessToken: string;
  isLogin = false;
  user: User;
  constructor(private router: Router, private userService: AuthService ) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe(
      data => {
        this.user = data;
      }
    );
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
