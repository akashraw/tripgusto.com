import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treks',
  templateUrl: './treks.component.html',
  styleUrls: ['./treks.component.css']
})
export class TreksComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
 
  treks = {
    titles: ['Kedarkantha', 'Valley Of Flowers','Har Ki Dun'],
    routes: ['kedarkantha-trek', 'valley-of-flowers', 'har-ki-dun-trek'], //leave this empty
    poster: [
             "assets/images/product/kedarkantha-product.jpg",
             
             "assets/images/product/valley-product.jpg",
             "assets/images/product/har-ki-dun-product.jpg"
            ],
    duration: ['5D-4N', '5D-4N', '7D-6N'],
    price: ['7,499', '-', '11,999'],
    pdlocation: ['Dehradun', 'Rishikesh', 'Dehradun']  //pick and drop location
 };
  
}

