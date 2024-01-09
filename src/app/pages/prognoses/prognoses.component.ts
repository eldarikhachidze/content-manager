import {Component, OnInit} from '@angular/core';
import {PrognosesService} from "../../core/services/prognoses.service";
import {Prognoses} from "../../core/interfaces/prognoses";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-prognoses',
  templateUrl: './prognoses.component.html',
  styleUrls: ['./prognoses.component.scss']
})
export class PrognosesComponent implements OnInit {

  prognoses: Prognoses[] = []
  categoryId?: number
  sub$ = new Subject()

  constructor(
    private prognosesService: PrognosesService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category']
      console.log('Category ID:', this.categoryId); // Add this line
      this.getPrognoses()
    })
  }

  getPrognoses() {
    const params = {
      limit: 12
    }
    this.prognosesService.getAllPrognoses(params)
      .pipe(takeUntil(this.sub$))
      .subscribe((response) => {
        this.prognoses = response.data
      })
  }

  deleteItem(id: string) {
    this.prognosesService.deleteItem(id).subscribe(() => {
      this.getPrognoses();
    });
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

}
