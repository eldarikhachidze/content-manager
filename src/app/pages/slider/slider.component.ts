import {Component, OnDestroy, OnInit} from '@angular/core';
import {Slider} from "../../core/interfaces/slider";
import {Router} from "@angular/router";
import {SliderService} from "../../core/services/slider.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-slider-add-or-edit',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  slider: Slider[] = []
  sub$ = new Subject()

  constructor(
    private router: Router,
    private sliderService: SliderService
  ) {
  }

  ngOnInit(): void {
    this.getSliders()
  }

  getSliders() {
    this.sliderService.getAllSliders()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.slider = response.data
      })
  }

  deleteItem(id: string) {
    this.sliderService.deleteItem(id)
      .pipe()
      .subscribe(res => {
        this.getSliders()
      })
  }

  ngOnDestroy(): void {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

}
