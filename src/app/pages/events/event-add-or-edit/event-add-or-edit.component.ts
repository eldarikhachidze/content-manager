import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EventsService} from "../../../core/services/events.service";
import {of, Subject, switchMap, takeUntil} from "rxjs";

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


  submit() {

    this.form.markAsTouched()
    if (this.form.invalid) {
      return
    }

    if (this.form.value.id) {
      this.eventsService.update(this.form.value.id, this.form.value)
        .pipe(takeUntil(this.event$))
        .subscribe(res => {
          this.router.navigate(['/events'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      const fd = new FormData()
      fd.append('files', this.selectedFile, this.selectedFile?.name)
      fd.append('name', this.form.value.name)
      fd.append('description', this.form.value.description)
      fd.append('organizedBy', this.form.value.organizedBy)
      fd.append('location', this.form.value.location)
      fd.append('startDate', this.form.value.startDate)
      fd.append('endDate', this.form.value.endDate)
      fd.append('price', this.form.value.price)

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
