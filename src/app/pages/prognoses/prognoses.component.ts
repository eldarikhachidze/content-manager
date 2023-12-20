import {Component, OnInit} from '@angular/core';
import {PrognosesService} from "../../core/services/prognoses.service";
import {Prognoses} from "../../core/interfaces/prognoses";

@Component({
  selector: 'app-prognoses',
  templateUrl: './prognoses.component.html',
  styleUrls: ['./prognoses.component.scss']
})
export class PrognosesComponent implements OnInit{

  prognoses: Prognoses[] = []

  constructor(
    private prognosesService : PrognosesService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.prognosesService.getAllPrognoses().subscribe(res => {
      console.log(res);
      this.prognoses = res.data;
    });
  }

  deleteItem(id: string) {
    this.prognosesService.deleteItem(id).subscribe(() => {
      this.getAll();
    });
  }

}
