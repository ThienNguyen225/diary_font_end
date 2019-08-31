import {Component, OnInit} from '@angular/core';
import {Diary} from '../../../../interface/diary.interface';
import {DiaryService} from '../../../../service/diary/diary.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  diary: Diary;
  id: number;

  constructor(private diaryService: DiaryService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.diaryService.getDiary(this.id).subscribe(data => {
      this.diary = data.data;
      console.log(this.diary);
    });
  }

}
