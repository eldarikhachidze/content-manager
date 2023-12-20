import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, of, switchMap} from "rxjs";
import {Category} from "../../../core/interfaces/category";
import {CategoryService} from "../../../core/services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PrognosesService} from "../../../core/services/prognoses.service";
import {ZodiacService} from "../../../core/services/zodiac.service";
import {Zodiaco} from "../../../core/interfaces/zodiac";

@Component({
  selector: 'app-prognoses-add-or-edit',
  templateUrl: './prognoses-add-or-edit.component.html',
  styleUrls: ['./prognoses-add-or-edit.component.scss']
})
export class PrognosesAddOrEditComponent {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    zodiacoId: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  })

  categories$: Observable<Category[]> = this.categoryService.getAllCategories()
  zodiac$: Observable<Zodiaco[]> = this.zodiacService.getAllZodiac()

  constructor(
    private prognosesService: PrognosesService,
    private categoryService: CategoryService,
    private zodiacService: ZodiacService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.prognosesService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          categoryId: res.category.id,
        })
      }
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    if (this.form.value.id) {
      this.prognosesService.update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/prognoses'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      console.log(this.form.value)
      this.prognosesService.create(this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/prognoses'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }
}
