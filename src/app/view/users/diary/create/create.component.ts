import {Component, OnInit} from '@angular/core';
import {DiaryService} from '../../../../service/diary/diary.service';
import {Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public Editor = ClassicEditor;
  public title: any;
  public contents: any;

  constructor(private diaryService: DiaryService, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  public onChange({editor}: ChangeEvent) {
    const data = editor.getData();
    this.contents = data;
  }

  onSubmit(createForm: HTMLFormElement) {
    this.title = createForm.title.value;
    this.diaryService.create(this.title, this.contents).subscribe(data => {
      this.toastr.success('Thêm thành công');
    });
    window.location.reload();
  }

}
