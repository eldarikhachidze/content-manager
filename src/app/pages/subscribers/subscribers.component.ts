import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {SubscribeService} from "../../core/services/subscribe.service";
import {Subscribe} from "../../core/interfaces/subscribe";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit, OnDestroy {

  total: number = 0;
  pageSize: number = 10;
  page: number = 1;
  subscribers: Subscribe[] = []

  sub$ = new Subject()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subscribeService: SubscribeService
  ) {
  }

  ngOnInit(): void {
    this.getSubscribers()
  }

  getSubscribers() {
    const params = {
      page: this.page,
      limit: this.pageSize
    };
    this.subscribeService.getSubscribers(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
          this.subscribers = response.data
          this.total = response.total;
          this.page = response.page;
          this.setQueryParams();
        },
        error => {
        })
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getSubscribers();
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
    this.subscribeService.deleteItem(id)
      .pipe()
      .subscribe(res => {
        this.getSubscribers()
      })
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }

}
