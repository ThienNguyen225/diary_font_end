import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DiaryService} from '../../../service/diary.service';

@Component( {
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: [ './create.component.scss' ]
} )
export class CreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(private diaryService: DiaryService, private fb: FormBuilder, private router: Router,
              private toastr: ToastrService) {
  }

  get title() {
    return this.postForm.get('name');
  }

  get content() {
    return this.postForm.get('email');
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const value = this.postForm.value;
    this.diaryService.create(value).subscribe(
      data => {
        this.toastr.success('One new story!');
        this.router.navigate(['']);
      }
    );
  }

}
