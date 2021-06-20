import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-trips',
  templateUrl: './bike-trips.component.html',
  styleUrls: ['./bike-trips.component.css']
})
export class BikeTripsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
 
 weekend = {
  titles: ['Chopta Chandrashila Trip', 'Rishikesh Retreat', 'Nagtibba Trek', 'Tirthan Valley Trip', 'Auli Stay', 'Kasol Kheerganga'],

  routes: ['chopta-chandrashills-weekend', 'rishikesh-retreat', 'nag-tibba', 'trithan-valley', 'auli-stay-trip', 'kasol-keerganga-weekend'], //leave this empty

  poster: ["assets/images/uk-backpacking/slider/chopta.jpg", 
           "assets/images/uk-backpacking/slider/chopta.jpg", 
           "assets/images/uk-backpacking/slider/chopta.jpg", 
           "assets/images/uk-backpacking/slider/chopta.jpg",
           "assets/images/uk-backpacking/slider/chopta.jpg",
           "assets/images/uk-backpacking/slider/chopta.jpg",         
          ], //leave this empty

  duration: ['3D- 2N', '3D-2N', '2D-1N','3D-2N', '3D-2N', '3D-2N'],

  price: ['7999', '7499', '4999', '6499', '7999','4999'],
  
  pdlocation: ['Delhi', 'Delhi', 'Dehradun', 'Delhi', 'Delhi', 'Delhi']  //pick and drop location
};
  
}

