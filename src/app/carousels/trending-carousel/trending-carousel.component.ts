import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-trending-carousel',
  templateUrl: './trending-carousel.component.html',
  styleUrls: ['./trending-carousel.component.css']
})
export class TrendingCarouselComponent implements OnInit, AfterViewInit{

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
  ngAfterViewInit(){
    $('#slider' ).owlCarousel({
      lazyLoad:true,
      arrow:true,
      items: 5,
      loop: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
          0: {
              items: 1
             },
         480:{
             items: 2
             },
         768: {
             items: 3
             },
         1170: {
             items: 4
             }
     }
    }); 
  }

}
