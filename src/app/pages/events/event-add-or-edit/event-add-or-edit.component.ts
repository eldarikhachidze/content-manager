import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EventsService} from "../../../core/services/events.service";
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-event-add-or-edit',
  templateUrl: './event-add-or-edit.component.html',
  styleUrls: ['./event-add-or-edit.component.scss']
})
export class EventAddOrEditComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    files: new FormControl(null, Validators.required),
    organizedBy: new FormControl('ხატია ბედოშვილი', Validators.required),
    location: new FormControl('online, ZOOM', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  })

  startDateModal?: NgbDateStruct;
  endDateModal?: NgbDateStruct;

  selectedFile: any
  event$ = new Subject();
  file!: File


  constructor(
    private router: Router,
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.eventsService.getOne(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
        })
      }
    })
  }

  formatDateToString(date: { year: number; month: number; day: number }): string {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    return `${date.year}-${pad(date.month)}-${pad(date.day)}`;
  }


  submit() {

    const startDateFormatted = this.formatDateToString(this.form.value.startDate);
    const endDateFormatted = this.formatDateToString(this.form.value.endDate);

    const formData = {
      ...this.form.value,
      startDate: startDateFormatted,
      endDate: endDateFormatted
    };
    this.form.markAsTouched()
    if (this.form.invalid) {
      return
    }

    if (this.form.value.id) {
      this.eventsService.update(this.form.value.id, formData)
        .pipe(takeUntil(this.event$))
        .subscribe(res => {
          this.router.navigate(['/events'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      const fd = new FormData();
      fd.append('files', this.selectedFile, this.selectedFile?.name);
      fd.append('name', formData.name);
      fd.append('description', formData.description);
      fd.append('organizedBy', formData.organizedBy);
      fd.append('location', formData.location);
      fd.append('startDate', formData.startDate);
      fd.append('endDate', formData.endDate);
      fd.append('price', formData.price);
      this.eventsService.create(fd).subscribe(res => {
        this.router.navigate(['/events'])
          .then(() => {
            this.form.reset()
          })
      })
    }

  }

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0]
  }

  ngOnDestroy(): void {
    this.event$.next(this.event$)
    this.event$.complete()
  }


}
