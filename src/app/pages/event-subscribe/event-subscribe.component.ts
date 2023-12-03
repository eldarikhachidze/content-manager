import {Component, OnDestroy, OnInit} from '@angular/core';
import { EventSubscribeResponse} from "../../core/interfaces/events";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {EventsService} from "../../core/services/events.service";

const CHECKBOX_KEY = 'myCheckboxState';
@Component({
  selector: 'app-event-subscribe',
  templateUrl: './event-subscribe.component.html',
  styleUrls: ['./event-subscribe.component.scss']
})


export class EventSubscribeComponent implements OnInit, OnDestroy {
  myCheckboxState: boolean = false;

  eventSubscribe: EventSubscribeResponse = { data: [], total: 0, limit: 0, page: 0 };  sub$ = new Subject()


  constructor(
    private router: Router,
    private eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
    this.myCheckboxState = JSON.parse(localStorage.getItem(CHECKBOX_KEY) ?? 'false');
    this.getAllEventSubscribe()
  }


  getAllEventSubscribe() {
    this.eventsService.getEventSubscribe()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.eventSubscribe.data.push(...response.data);
        this.eventSubscribe.total = response.total;
        this.eventSubscribe.limit = response.limit;
        this.eventSubscribe.page = response.page;
      });
  }

  onCheckboxChange() {
    localStorage.setItem(CHECKBOX_KEY, JSON.stringify(this.myCheckboxState ?? false));
  }

  deleteItem(id: string) {
    // this.eventsService.deleteItem(id)
    //   .pipe()
    //   .subscribe(res => {
    //     this.getAllEvents()
    //   })
  }

  ngOnDestroy(): void {
  }

}
