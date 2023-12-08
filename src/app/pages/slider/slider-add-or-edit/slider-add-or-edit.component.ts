import {Component, OnDestroy, OnInit} from '@angular/core';
import {of, Subject, switchMap, takeUntil} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {SliderService} from "../../../core/services/slider.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-slider-add-or-edit',
  templateUrl: './slider-add-or-edit.component.html',
  styleUrls: ['./slider-add-or-edit.component.scss']
})
export class SliderAddOrEditComponent implements OnInit, OnDestroy {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    description: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    files: new FormControl(null, Validators.required),
  })

  selectedFile: any
  sub$ = new Subject();
  file!: File


  constructor(
    private router: Router,
    private sliderService: SliderService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    // this.route.params.pipe(
    //   switchMap((params: any) => {
    //     if (params['id']) {
    //       return this.sliderService.getOne(params['id'])
    //     }
    //     return of(null)
    //   })
    // ).subscribe(res => {
    //   if (res) {
    //     this.form.patchValue({
    //       ...res,
    //     })
    //     console.log(res)
    //   }
    // })
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
      this.sliderService.update(this.form.value.id, this.form.value)
        .pipe(takeUntil(this.sub$))
        .subscribe(res => {
          this.router.navigate(['/slider'])
            .then(() => {
              this.form.reset()
            })
        })
    } else {
      const fd = new FormData()
      fd.append('files', this.selectedFile, this.selectedFile?.name)
      fd.append('url', this.form.value.url)
      fd.append('description', this.form.value.description)

      this.sliderService.create(fd).subscribe(res => {
        this.router.navigate(['/slider'])
          .then(() => {
            this.form.reset()
          })
      })
    }
  }

  ngOnDestroy(): void {
  }

}
