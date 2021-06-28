import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treks-carousel',
  templateUrl: './treks-carousel.component.html',
  styleUrls: ['./treks-carousel.component.css']
})
export class TreksCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  treks = {
    titles: ['Kedarkantha Trek', 'Har Ki Dun Trek',  'Kedarnath Dham', 'Chopta Chandrashila', 'Kasol Kheerganga'],
  
    routes: ['kedarkantha-trek', 'har-ki-dun-trek', 'kedarnath-dham', 'chopta-chandrashills-weekend', 'kasol-keerganga-weekend'], //leave this empty
  
    slides: ["assets/images/product/kedarkantha-product.jpg", 
             "assets/images/product/har-ki-dun-product.jpg", 
              
             "assets/images/product/kedarnath-product.jpg",
             "assets/images/product/product-chotpa.jpg",
             "assets/images/product/kasol-keer-product.jpg",
                      
            ], //leave this empty
  
    duration: ['5D-4N', '7D-6N', '4D-3N', '3D-2N','3D-2N'],
  
    price: ['7,499', '11,999',  '10,999', '6,999','4,999'],
    
    pdlocation: ['Dehradun', 'Dehradun',  'Rishikesh', 'Delhi', 'delhi']  //pick and drop location
  };


}
