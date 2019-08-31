import {Component, OnInit} from '@angular/core';
import {Diary} from '../../../../interface/diary.interface';
import {DiaryService} from '../../../../service/diary/diary.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  id: number;
  diary: Diary;

  constructor(private diaryService: DiaryService, private route: ActivatedRoute, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.diaryService.getDiary(this.id).subscribe(data => {
      this.diary = data.data;
    });
  }

  onSubmit(id: number) {
    this.diaryService.delete(this.id).subscribe(data => {
      this.router.navigate(['/page/home']);
      this.toastr.success('Xóa thành công');
    });
  }

}
