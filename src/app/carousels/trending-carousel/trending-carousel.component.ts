import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-carousel',
  templateUrl: './trending-carousel.component.html',
  styleUrls: ['./trending-carousel.component.css']
})
export class TrendingCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  trending = {
    titles: ['Kasol - Manali', 'Kedarnath Dham', 'Rishikesh Retreat', 'Winter Spiti', 'Parvati Valley'],
  
    routes: ['kasol-manali-back', 'kedarnath-dham', 'rishikesh-retreat', 'winter-spiti-back', 'parvati-valley'], //leave this empty
  
    slides: ["assets/images/product/kasol-manali-product.jpg", 
             "assets/images/product/kedarnath-product.jpg", 
             "assets/images/product/rishikesh-product.jpg", 
             "assets/images/product/spiti-product.jpg",
             "assets/images/product/parvati-valley-product.jpg",
                      
            ], //leave this empty
  
    duration: ['5D-4N', '4D-3N', '3D-2N','7D-6N', '5D-4N'],
  
    price: ['10,499', '10,499', '7,499', '16,499', '10,000'],
    
    pdlocation: ['Delhi', 'Rishikesh', 'Delhi', 'Delhi', 'Delhi']  //pick and drop location
  };

}
