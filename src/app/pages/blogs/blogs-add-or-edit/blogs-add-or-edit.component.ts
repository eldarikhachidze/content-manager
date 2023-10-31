import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogsService} from "../../../core/services/blogs.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blogs-add-or-edit',
  templateUrl: './blogs-add-or-edit.component.html',
  styleUrls: ['./blogs-add-or-edit.component.scss']
})
export class BlogsAddOrEditComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  })

  constructor(
    private blogsService: BlogsService,
    private router: Router,
  ) {
  }



  submit() {
    if (this.form.invalid) {
      return
    }

    console.log(this.form.value)
    if (this.form.value) {
      this.blogsService.create(this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/blogs'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }
}
