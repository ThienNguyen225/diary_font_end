import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {DiaryService} from '../../../../service/diary/diary.service';
import {ToastrService} from 'ngx-toastr';
import {Diary} from '../../../../interface/diary.interface';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-update-diary',
  templateUrl: './update-diary.component.html',
  styleUrls: ['./update-diary.component.scss']
})
export class UpdateDiaryComponent implements OnInit {
  public Editor = ClassicEditor;
  public diary: Diary;
  public title: any;
  public contents: any;
  id: number;


  constructor(private diaryService: DiaryService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.diaryService.getDiary(this.id).subscribe(data => {
      this.diary = data.data;
    });
  }

  onChange({editor}: ChangeEvent) {
    const data = editor.getData();
    this.contents = data;
  }

  onSubmit(updateForm: HTMLFormElement) {
    this.title = updateForm.title.value;
    console.log(this.title);
    this.diaryService.update(this.title, this.contents, this.id).subscribe(data => {
      this.toastr.success('Thêm thành công');
    });
  }

}
