import {Component, OnInit} from '@angular/core';
import {DiaryService} from '../../service/diary.service';
import {Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public title: string = '';
  public contents: string = '';
  public Editor = ClassicEditor;
  constructor(public api: DiaryService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onChange({editor}: ChangeEvent) {
    const data = editor.getData();
    this.contents = data;
  }

  create(createForm: HTMLFormElement) {
    this.title = createForm.title.value;
    this.api.addDiary(this.title, this.contents).subscribe(result => {
      this.router.navigate(['/page/create']);
    });
    console.log(this.title);
    console.log(this.contents);
  }

}
