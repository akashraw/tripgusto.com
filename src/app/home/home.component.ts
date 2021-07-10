import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from '../category.service';
import { TripClass } from '../TripDataClass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  catego: TripClass[];
  nCat: TripClass[];
  test: ['Backpacking Trip', 'Weekend Trip', 'Pilgrim', 'Trek'];
  catPass1:string = "Treks";
  catPass3: string = "Weekend Getaway Trips";
  catPass2:string = "Backpacking Trips"
  
  constructor(
      public catService: CategoryService,
      public router:Router
  ) { }
  
  ngOnInit(): void {

  }

}