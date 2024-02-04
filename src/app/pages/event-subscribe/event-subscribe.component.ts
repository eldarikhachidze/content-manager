import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventSubscribeResponse} from "../../core/interfaces/events";
import {Subject, switchMap, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {EventsService} from "../../core/services/events.service";

const CHECKBOX_KEY = 'myCheckboxState';

@Component({
  selector: 'app-event-subscribe',
  templateUrl: './event-subscribe.component.html',
  styleUrls: ['./event-subscribe.component.scss']
})


export class EventSubscribeComponent implements OnInit, OnDestroy {
  myCheckboxState: boolean = false;

  total: number = 0;
  pageSize: number = 10;
  page: number = 1;
  eventSubscribe: EventSubscribeResponse = {data: [], total: 0, limit: 0, page: 0};
  sub$ = new Subject()


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
    this.myCheckboxState = JSON.parse(localStorage.getItem(CHECKBOX_KEY) ?? 'false');
    this.getAllEventSubscribe()
  }


  getAllEventSubscribe() {
    const params = {
      page: this.page,
      limit: this.pageSize
    };
    this.eventsService.getEventSubscribe(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.eventSubscribe.data.push(...response.data);
        this.total = response.total;
        this.page = response.page;
        this.setQueryParams();
      });
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getAllEventSubscribe();
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

  onCheckboxChange() {
    localStorage.setItem(CHECKBOX_KEY, JSON.stringify(this.myCheckboxState ?? false));
  }

  deleteItem(id: string) {
    this.eventsService.deleteEventSubscribe(id)
      .pipe(
        switchMap(() => this.eventsService.getEventSubscribe())
      )
      .subscribe((response) => {
        this.eventSubscribe.data = response.data;
        this.eventSubscribe.total = response.total;
        this.eventSubscribe.limit = response.limit;
        this.eventSubscribe.page = response.page;
      });
  }

  ngOnDestroy(): void {
  }

}
