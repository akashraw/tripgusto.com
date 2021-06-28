import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
 
 private = {
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

  price: ['7,999', '7,499', '4,999', '6,499', '7,999','4,999'],
  
  pdlocation: ['Delhi', 'Delhi', 'Dehradun', 'Delhi', 'Delhi', 'Delhi']  //pick and drop location
};
  
}

