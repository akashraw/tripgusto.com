import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pilgrim',
  templateUrl: './pilgrim.component.html',
  styleUrls: ['./pilgrim.component.css']
})
export class PilgrimComponent implements OnInit {
  title = 'Pligrim';
  constructor(private titleService: Title) { this.titleService.setTitle(this.title); }
  
  ngOnInit(): void {
  }
 
 pilgrim = {
  titles: ['Kedarnath Dham', 'Badrinath Dham', 'Kedarnath & Badrinath Dham', 'Char Dham', 'Chopta Chandrashila Trip'],

  routes: ['kedarnath-dham', 'badrinath-dham', 'kedar-badri-dham', 'char-dham', 'chopta-chandrashills-weekend'], //leave this empty

  poster: ["assets/images/product/kedarnath-product.jpg", 
           "assets/images/product/badrinath-product.jpg", 
           "assets/images/product/kedar-badri-product.jpg", 
           "assets/images/product/char-dham-product.jpg",
           "assets/images/product/product-chotpa.jpg",                   
          ], //leave this empty

  duration: ['4D-3N', '3D-2N', '5D-4N','11D-10N', '3D-2N'],

  price: ['10,999', '9,999', '17,909', '6,499', '6,999'],
  
  pdlocation: ['Rishikesh', 'Rishikesh', 'Rishikesh', 'Rishikesh', 'Delhi']  //pick and drop location
};
  
}

