import {Component, OnInit} from '@angular/core';
import {IUser} from '../../IUser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id: number;
  user: any;
  name: string;
  email: string;

  constructor(private api: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  update(updateForm: HTMLFormElement) {
    this.name = updateForm.name.value;
    this.email = updateForm.email.value;
    this.api.update(this.id, this.nameUser, this.email).subscribe(result => {
        this.router.navigate(['/user/profile']);
      }
    );
  }
}
