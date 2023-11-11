import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../core/interfaces/user";
import {Subject, takeUntil} from "rxjs";
import {UsersService} from "../../core/services/users.service";
import {SubscribeService} from "../../core/services/subscribe.service";
import {Subscribe} from "../../core/interfaces/subscribe";

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit, OnDestroy {

  subscribers: Subscribe[] = []

  sub$ = new Subject()

  constructor(
    private subscribeService: SubscribeService
  ) {
  }

  ngOnInit(): void {
    this.getSubscribers()
  }

  getSubscribers() {
    this.subscribeService.getSubscribers({})
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.subscribers = response.data
        console.log(this.subscribers)
      })
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
