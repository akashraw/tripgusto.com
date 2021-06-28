
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.css']
})
export class AllTripsComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  categories = {
     titles: ['a', '', ''],

     routes: ['a', '', ''], //leave this empty

     poster: ["assets/images/uk-backpacking/slider/chopta.jpg",],

     duration: ['a', '', ''],

     price: ['a', '', ''],
     
     pdlocation: ['a', '', '']  //pick and drop location
  };

}
 