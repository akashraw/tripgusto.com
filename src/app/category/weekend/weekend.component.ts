import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekend',
  templateUrl: './weekend.component.html',
  styleUrls: ['./weekend.component.css']
})
export class WeekendComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
 
 weekend = {
  titles: ['Chopta Chandrashila Trip', 'Rishikesh Retreat',  'Tirthan Valley Trip',  'Kasol Kheerganga'],

  routes: ['chopta-chandrashills-weekend', 'rishikesh-retreat',  'trithan-valley',  'kasol-keerganga-weekend'], //leave this empty

  poster: ["assets/images/product/product-chotpa.jpg", 
           "assets/images/product/rishikesh-product.jpg", 
            
           "assets/images/product/tirthan-valley-product.jpg",
           "assets/images/product/kasol-keer-product.jpg",         
          ], //leave this empty

  duration: ['3D- 2N', '3D-2N', '2D-1N','3D-2N',  '3D-2N'],

  price: ['7,999', '7,499', '6,499', '4,999'],
  
  pdlocation: ['Delhi', 'Delhi', 'Delhi',  'Delhi']  //pick and drop location
};
  
}

