import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogsService} from "../../../core/services/blogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of, pipe, switchMap} from "rxjs";

@Component({
  selector: 'app-blogs-add-or-edit',
  templateUrl: './blogs-add-or-edit.component.html',
  styleUrls: ['./blogs-add-or-edit.component.scss']
})
export class BlogsAddOrEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    files: new FormControl('', Validators.required),
  })

  title: string = ''; // Initialize title
  description: string = ''; // Initialize description
  file!: File

  constructor(
    private blogsService: BlogsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.blogsService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res
        })
      }
    })
  }



    submit() {
      // if (this.form.invalid) {
      //   return;
      // }
      //
      // const formData: FormData = new FormData();
      // formData.append('id', this.form.get('id')?.value);
      // formData.append('title', this.form.get('title')?.value);
      // formData.append('description', this.form.get('description')?.value);
      // formData.append('files', this.form.get('files')?.value); // Assuming 'files' is the name of your file input field
      //
      // this.blogsService.update(formData).subscribe(res => {
      //   this.router.navigate(['/blogs']).then(() => {
      //     this.form.reset();
      //   });
      // });

      this.form.markAsTouched()
      if (this.form.invalid) {
        return
      }


      if (this.form.value.id) {
        this.blogsService.update(this.form.value.id, this.form.value)
          .pipe()
          .subscribe(res => {
            this.router.navigate(['/blogs'])
              .then(() => {
                this.form.reset()
              })
          })
      } else {
        // const formData: FormData = new FormData();
        // formData.append('id', this.form.get('id')?.value);
        // formData.append('title', this.form.get('title')?.value);
        // formData.append('description', this.form.get('description')?.value);
        // formData.append('files', this.form.get('files')?.value); // Assuming 'files' is the name of your file input field
        this.blogsService.create(this.title, this.description, this.file)
          .pipe()
          .subscribe(res => {
            this.router.navigate(['/blogs'])
              .then(() => {
                this.form.reset()
              })
          })
        console.log(this.form.value)
      }
    }
  }
