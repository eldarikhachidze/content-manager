import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {BlogsService} from "../../../core/services/blogs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SingsService} from "../../../core/services/sings.service";

@Component({
  selector: 'app-astrology-sings-edit',
  templateUrl: './astrology-sings-edit.component.html',
  styleUrls: ['./astrology-sings-edit.component.scss']
})
export class AstrologySingsEditComponent implements OnInit{

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    files: new FormControl(null, Validators.required),
  })

  selectedFile: any


  sub$ = new Subject();

  file!: File

  constructor(
    private singsService: SingsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
   this.route.params.pipe(
     switchMap((params: any) => {
       if (params['id']) {
         return this.singsService.getOne(params['id'])
       }
       return of(null)
     })
   ).subscribe(res => {
     console.log(res)
   })
  }

  onSelectedFile(event: any) {
    this.selectedFile = event.target.files[0]
  }

  submit() {

    this.form.markAsTouched()
    if (this.form.invalid) {
      return
    }


    if (this.form.value.id) {
      console.log(this.form.value.id)
      this.singsService.update(this.form.value.id, this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe(res => {
          this.router.navigate(['/sings'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }

  ngOnDestroy() {
    this.sub$.next(this.sub$)
    this.sub$.complete()
  }

}
