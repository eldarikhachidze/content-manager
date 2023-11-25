import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EventsService} from "../../../core/services/events.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-event-add-or-edit',
  templateUrl: './event-add-or-edit.component.html',
  styleUrls: ['./event-add-or-edit.component.scss']
})
export class EventAddOrEditComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    files: new FormControl(null, Validators.required),
    location: new FormControl('', Validators.required),
    organizedBy: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)
  })

  selectedFile: any
  event$ = new Subject();
  file!: File


  constructor(
    private router: Router,
    private eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
  }


  submit() {

    this.form.markAsTouched()
    if (this.form.invalid) {
      return
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
