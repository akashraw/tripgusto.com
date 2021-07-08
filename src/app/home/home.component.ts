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
  constructor(
      public catService: CategoryService,
      private route: ActivatedRoute,
      public router:Router
  ) { }
  
  ngOnInit(): void {
    this.getCategory()
  }
  // Calling category details from service methods
 
  getCategory(): void {
  this.catego = this.catService.getCategory();
  this.nCat= this.catego.filter(o => o.categor === 'bike' )
  }
}