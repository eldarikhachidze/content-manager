import {Component} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {Category} from "../../core/interfaces/category";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categories: Category[] = []
  sub$ = new Subject()

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.getCategories()
  }


  getCategories() {
    this.categoryService.getAllCategories()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.categories = response as unknown as Category[];
      })
  }

  deleteItem(id: string) {
    this.categoryService.deleteItem(id)
      .pipe()
      .subscribe(res => {
        this.getCategories()
      })
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

}
