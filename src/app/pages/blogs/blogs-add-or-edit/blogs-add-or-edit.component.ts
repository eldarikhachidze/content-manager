import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogsService} from "../../../core/services/blogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of, pipe, Subject, switchMap} from "rxjs";
import {Blog} from "../../../core/interfaces/blogs";

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
    files: new FormControl('', Validators.required),
  })

  blog$ = new Subject<void>();
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

  ngOnDestroy() {
    this.blog$.next()
    this.blog$.complete()
  }


  submit() {

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
        this.blogsService.create(this.form.value)
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
