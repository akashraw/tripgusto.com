import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backpacking-carousel',
  templateUrl: './backpacking-carousel.component.html',
  styleUrls: ['./backpacking-carousel.component.css']
})
export class BackpackingCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  backpacking = {
    titles: ['Uttarakhand Backpacking', 'Winter Spiti', 'Manali Kasol Tirthan', 'Kinnaur Valley', 'Parvati Valley'],
  
    routes: ['uttarakhand-back', 'winter-spiti-back', 'manali-kasol-trithan-back', 'kinnaur-valley', 'parvati-valley'], //leave this empty
  
    slides: ["assets/images/product/uttarakhand-bagpacking-product.jpg", 
             "assets/images/product/spiti-product.jpg", 
             "assets/images/product/kasol-manali-tirthan-product.jpg", 
             "assets/images/product/kinnaur-product.jpg",
             "assets/images/product/parvati-valley-product.jpg",
                      
            ], //leave this empty
  
    duration: ['5D-4N', '7D-6N', '5D-4N','5D-4N', '5D-4N'],
  
    price: ['13,499', '16,499', '12,999', '12,499', '9,999'],
    
    pdlocation: ['Delhi', 'Delhi', 'Delhi', 'Delhi', 'Delhi']  //pick and drop location
  };

}
