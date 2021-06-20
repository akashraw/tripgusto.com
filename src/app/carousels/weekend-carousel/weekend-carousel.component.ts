import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekend-carousel',
  templateUrl: './weekend-carousel.component.html',
  styleUrls: ['./weekend-carousel.component.css']
})
export class WeekendCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  weekend = {
    titles: ['Kasol Kheerganga', 'Tirthan Valley', 'Rishikesh Retreat', 'Chopta - Chandrashilla'],
  
    routes: ['kasol-keerganga-weekend', 'trithan-valley', 'rishikesh-retreat', 'chopta-chandrashills-weekend'], //leave this empty
  
    slides: ["assets/images/product/kasol-manali-product.jpg", 
             "assets/images/product/tirthan-valley-product.jpg", 
             "assets/images/product/rishikesh-product.jpg", 
             "assets/images/product/spiti-product.jpg",
             
                      
            ], //leave this empty
  
    duration: ['3D- 2N', '3D-2N', '3D-2N','3D-2N' ],
  
    price: ['4,999', '6,499', '7,499', '6,999' ],
    
    pdlocation: ['Delhi', 'Delhi', 'Delhi', 'Delhi']  //pick and drop location
  };

}
