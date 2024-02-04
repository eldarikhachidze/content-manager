import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogsService} from "../../core/services/blogs.service";
import {Blog} from "../../core/interfaces/blogs";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {

  total: number = 0;
  pageSize: number = 10;
  page: number = 1;
  blogs: Blog[] = []
  sub$ = new Subject()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {
  }

  ngOnInit() {
    this.getAllBlogs()
  }


  getAllBlogs() {
    const params = {
      page: this.page,
      limit: this.pageSize
    };
    this.blogsService.getAllBlogs(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.blogs = response.data
        this.total = response.total;
        this.page = response.page;
        this.setQueryParams();
      })
  }


  pageChangeEvent(event: number) {
    this.page = event;
    this.getAllBlogs();
  }

  setQueryParams() {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {
          page: this.page,
          pageSize: this.pageSize,
        },
        queryParamsHandling: 'merge',
      })
      .then();
  }


  deleteItem(id: string) {
    this.blogsService.deleteItem(id)
      .pipe()
      .subscribe(res => {
        this.getAllBlogs()
      })
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }
}
