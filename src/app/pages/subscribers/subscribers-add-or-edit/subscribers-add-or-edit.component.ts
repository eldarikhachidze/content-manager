import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SubscribeService} from "../../../core/services/subscribe.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-subscribers-add-or-edit',
  templateUrl: './subscribers-add-or-edit.component.html',
  styleUrls: ['./subscribers-add-or-edit.component.scss']
})
export class SubscribersAddOrEditComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(
    private router: Router,
    private subscribeService: SubscribeService
  ) {
  }

  submit() {
    this.form.markAsTouched()
    if (this.form.invalid) return

    console.log(this.form.value)

    this.subscribeService.create(this.form.value)
      .pipe()
      .subscribe(res => {
        this.router.navigate(['/subscribers'])
          .then(() => {
          this.form.reset()
        })
      })
  }

}
