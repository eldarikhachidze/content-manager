import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EventsService} from "../../core/services/events.service";
import {Subject, takeUntil} from "rxjs";
import {Event} from "../../core/interfaces/events";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {

  events: Event[] = []
  sub$ = new Subject()


  constructor(
    private router: Router,
    private eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
    this.getAllEvents()
  }


  getAllEvents() {
    this.eventsService.getAllEvents()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.events = response.data
      })
  }

  deleteItem(id: string) {
    this.eventsService.deleteItem(id)
      .pipe()
      .subscribe(res => {
        this.getAllEvents()
      })
  }

  ngOnDestroy(): void {
  }

}
