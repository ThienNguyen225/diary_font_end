import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'diary-font-end';
  accessToken: string;
  isLogin = false;

  ngOnInit() {
    this.accessToken = localStorage.getItem('ACCESS_TOKEN');
    console.log(localStorage.getItem('ACCESS_TOKEN'));
    if (this.accessToken !== null) {
      this.isLogin = true;
    }
  }
}
