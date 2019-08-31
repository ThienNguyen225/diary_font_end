import {Component, OnInit} from '@angular/core';
import {DiaryService} from '../../../../service/diary/diary.service';
import {Diary} from '../../../../interface/diary.interface';

@Component({
  selector: 'app-show-diary',
  templateUrl: './show-diary.component.html',
  styleUrls: ['./show-diary.component.scss']
})
export class ShowDiaryComponent implements OnInit {
  diaryAll: any;

  constructor(private diaryService: DiaryService) {
  }

  ngOnInit() {
    this.diaryService.getAllDiary().subscribe(data => {
      this.diaryAll = data.data;
      console.log(this.diaryAll);
      console.log(data);
    });
  }


}
