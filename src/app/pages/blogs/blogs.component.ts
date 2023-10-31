import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogsService} from "../../core/services/blogs.service";
import {Blog} from "../../core/interfaces/blogs";
import {Subject, takeUntil} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {

  blogs: Blog[] = []
  data: any[] = [];
  total?: number;
  limit?: number;
  page?: number;

  sub$ = new Subject()
  constructor(
    private blogsService: BlogsService
  ) {
  }

  ngOnInit() {
    this.getAllBlogs()
  }


  getAllBlogs() {
    this.blogsService.getAllBlogs()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.data = response.data;
        this.total = response.total;
        this.limit = response.limit;
        this.page = response.page;
        console.log(response)

      })
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }
}
