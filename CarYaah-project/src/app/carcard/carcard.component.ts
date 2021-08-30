import { Component, OnInit } from '@angular/core';
import { CarcardService } from '../carcard.service';
import { CarsServerService } from '../cars-server.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carcard',
  templateUrl: './carcard.component.html',
  styleUrls: ['./carcard.component.css'],
})
export class CarcardComponent implements OnInit {
  constructor(
    private carCardService: CarcardService,
    private ts: CarsServerService,
    private http: HttpClient
  ) {}

  cars: any = [];

  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.carCardService.getCars().subscribe((resp) => {
      this.cars = resp;
      console.log(resp);
    });
  }
}
