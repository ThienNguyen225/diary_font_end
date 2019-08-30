import {Component, OnInit} from '@angular/core';
import {User} from '../../../interface/user.interface';
import {DiaryService} from "../../../service/diary.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  data: any;
  token: string;
  isLogin = false;

  constructor(private api: DiaryService) {
  }

  ngOnInit() {
    this.getList();
    this.token = localStorage.getItem('ACCESS_TOKEN');
    if (this.token !== null) {
      this.isLogin = true;
    }
  }
  getList() {
    this.api.getList().subscribe(result => {
      this.data = result.data;
    });
  }

}
