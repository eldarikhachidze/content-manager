import {Component, OnInit} from '@angular/core';
import {PrognosesService} from "../../core/services/prognoses.service";
import {Prognoses} from "../../core/interfaces/prognoses";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subject, takeUntil} from "rxjs";
import {Category} from "../../core/interfaces/category";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-prognoses',
  templateUrl: './prognoses.component.html',
  styleUrls: ['./prognoses.component.scss']
})
export class PrognosesComponent implements OnInit {
  categories$: Observable<Category[]> = this.categoryService.getAllCategories()

  prognoses: Prognoses[] = []
  categoryId?: number
  sub$ = new Subject()

  constructor(
    private prognosesService: PrognosesService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category']
      if (this.categoryId === undefined) {
        this.categoryId = 1;
      }
      this.getPrognoses();
    })
  }

  getPrognoses() {
    const params = {
      categoryId: this.categoryId,
      limit: 12
    }
    this.prognosesService.getAllPrognoses(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.prognoses = response.data
      })
  }

  deleteItem(id: string) {
    this.prognosesService.deleteItem(id).subscribe(() => {
      this.getPrognoses();
    });
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

}
