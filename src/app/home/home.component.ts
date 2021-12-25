import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService } from '../category.service';
import { TripClass } from '../TripDataClass';
import {Component,OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

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
  ngAfterViewInit(){
    
      $('.owl-banner').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 0,
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            460: {
                items: 1,
                margin: 0
            },
            576: {
                items: 1,
                margin: 20
            },
            992: {
                items: 1,
                margin: 30
            }
        }
    });
  }
    
}
