import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {CategoryService} from "../../../core/services/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-add-or-edit',
  templateUrl: './category-add-or-edit.component.html',
  styleUrls: ['./category-add-or-edit.component.scss']
})
export class CategoryAddOrEditComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
  })

  sub$ = new Subject();


  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.categoryService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
        })
        console.log(res)
      }
    })
  }


  submit() {

    this.form.markAsTouched()
    if (this.form.invalid) {
      return
    }


    if (this.form.value.id) {
      this.categoryService.update(this.form.value.id, this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe(res => {
          this.router.navigate(['/category'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      this.categoryService.create(this.form.value).subscribe(res => {
        this.router.navigate(['/category'])
          .then(() => {
            this.form.reset()
          })
      })
    }
  }


  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }



}
