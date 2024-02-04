import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../core/services/users.service";
import {User} from "../../core/interfaces/user";
import {Subject, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  total: number = 0;
  pageSize: number = 10;
  page: number = 1;
  users: User[] = []

  sub$ = new Subject()

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
  ) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    const params = {
      page: this.page,
      limit: this.pageSize
    };
    this.usersService.getUsers(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.users = response.data
        this.total = response.total;
        this.page = response.page;
        this.setQueryParams();
        console.log(this.users)
      })
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getUsers();
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
    this.usersService.deleteItem(id)
      .pipe()
      .subscribe(res => {
        this.getUsers()
      })
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
