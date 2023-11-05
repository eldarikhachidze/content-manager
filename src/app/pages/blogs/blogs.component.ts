import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogsService} from "../../core/services/blogs.service";
import {Blog} from "../../core/interfaces/blogs";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {

  blogs: Blog[] = []
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
        this.blogs = response.data
        console.log(response.data)
      })
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
