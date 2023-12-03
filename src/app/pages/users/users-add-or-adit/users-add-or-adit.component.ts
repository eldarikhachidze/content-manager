import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../core/services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of, Subject, switchMap} from "rxjs";
import {User} from "../../../core/interfaces/user";

@Component({
  selector: 'app-users-add-or-adit',
  templateUrl: './users-add-or-adit.component.html',
  styleUrls: ['./users-add-or-adit.component.scss']
})
export class UsersAddOrAditComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    timeOfBirth: new FormControl(''),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(9)]),
  })

  destroy$ = new Subject<void>();


  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: any) => {
        if (params['id']) {
          return this.usersService.getUser(params['id'])
        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({
          ...res,
          id: res.id
        })
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    if (this.form.value.id) {
      this.usersService.update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/users'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }

}
