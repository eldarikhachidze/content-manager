import {Component, OnInit} from '@angular/core';
import {Category} from "../../core/interfaces/category";
import {Subject, takeUntil} from "rxjs";
import {CategoryService} from "../../core/services/category.service";
import {AstrologySings} from "../../core/interfaces/astrology-sings";
import {SingsService} from "../../core/services/sings.service";

@Component({
  selector: 'app-astrology-sings',
  templateUrl: './astrology-sings.component.html',
  styleUrls: ['./astrology-sings.component.scss']
})
export class AstrologySingsComponent implements OnInit {

  sings: AstrologySings[] = []
  sub$ = new Subject()

  constructor(
    private singsService: SingsService
  ) {
  }

  ngOnInit() {
    this.getSings()
  }


  getSings() {
    this.singsService.getAllSings()
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.sings = response;
        console.log(this.sings)
      })
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

}
