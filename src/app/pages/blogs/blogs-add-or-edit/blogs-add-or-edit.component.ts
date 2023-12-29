import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogsService} from "../../../core/services/blogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of, Subject, switchMap, takeUntil} from "rxjs";

@Component({
  selector: 'app-blogs-add-or-edit',
  templateUrl: './blogs-add-or-edit.component.html',
  styleUrls: ['./blogs-add-or-edit.component.scss']
})
export class BlogsAddOrEditComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    files: new FormControl(null, Validators.required),
  })

  selectedFile: any


  blog$ = new Subject();

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
          ...res,
        })
      }
    })
  }

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0]
  }

  submit() {

    this.form.markAsTouched()
    if (this.form.invalid) {
      return
    }


    if (this.form.value.id) {
      this.blogsService.update(this.form.value.id, this.form.value)
        .pipe(takeUntil(this.blog$))
        .subscribe(res => {
          this.router.navigate(['/blogs'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      const fd = new FormData()
      fd.append('files', this.selectedFile, this.selectedFile?.name)
      fd.append('title', this.form.value.title)
      fd.append('description', this.form.value.description)

      this.blogsService.create(fd).subscribe(res => {
        this.router.navigate(['/blogs'])
          .then(() => {
            this.form.reset()
          })
      })
    }
  }

  ngOnDestroy() {
    this.blog$.next(this.blog$)
    this.blog$.complete()
  }

}
