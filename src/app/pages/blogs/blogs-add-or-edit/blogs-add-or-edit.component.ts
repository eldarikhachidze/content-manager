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
    files: new FormControl('', Validators.required),
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

    // console.log(this.form.value)
    // const formData: FormData = new FormData();
    //
    // formData.append('id', this.form.get('id')?.value);
    // formData.append('title', this.form.get('title')?.value);
    // formData.append('description', this.form.get('description')?.value);
    // formData.append('image', this.form.get('image')?.value);
    //
    // this.blogsService.create(formData).subscribe(res => {
    //   this.router.navigate(['/blogs']).then(() => {
    //     this.form.reset();
    //   });
    // });
  }
}
