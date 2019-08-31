import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {DiaryService} from '../../../../service/diary/diary.service';
import {ToastrService} from 'ngx-toastr';
import {Diary} from '../../../../interface/diary.interface';
import {Router} from '@angular/router';


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


  constructor(private diaryService: DiaryService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  // onChange({editor}: ChangeEvent) {
  //   const data = editor.getData();
  //   this.contents = data;
  // }

  // onSubmit(updateForm: HTMLFormElement) {
  //   this.title = updateForm.title.value;
  //   this.diaryService.update(this.title, this.contents, this.diary.id).subscribe(data => {
  //     this.toastr.success('Thêm thành công');
  //   });
  // }

}
