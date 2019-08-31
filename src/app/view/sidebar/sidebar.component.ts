import {Component, OnInit} from '@angular/core';
import {DiaryService} from '../../service/diary/diary.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  data: any;
  token: string;
  isLogin = false;

  constructor(private diaryService: DiaryService) {
  }

  ngOnInit() {
    this.getList();
    this.token = localStorage.getItem('ACCESS_TOKEN');
    if (this.token !== null) {
      this.isLogin = true;
    }
  }

  getList() {
    this.diaryService.getAllDiary().subscribe(result => {
      this.data = result.data;
    });
  }

  reload() {
    window.location.reload();
  }


}
