import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventsService} from "../../core/services/events.service";
import {Subject, takeUntil} from "rxjs";
import {Event} from "../../core/interfaces/events";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  total: number = 0;
  pageSize: number = 10;
  page: number = 1;
  events: Event[] = []

  sub$ = new Subject()


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
    this.getAllEvents()
  }


  getAllEvents() {
    const params = {
      page: this.page,
      limit: this.pageSize
    };
    this.eventsService.getAllEvents(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.events = response.data
        this.total = response.total;
        this.page = response.page;
        this.setQueryParams();
      })
  }

  pageChangeEvent(event: number) {
    this.page = event;
    this.getAllEvents();
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
    this.eventsService.deleteItem(id)
      .pipe()
      .subscribe(res => {
        this.getAllEvents()
      })
  }

  ngOnDestroy(): void {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

}
