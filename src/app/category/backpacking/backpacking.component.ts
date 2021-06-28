import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backpacking',
  templateUrl: './backpacking.component.html',
  styleUrls: ['./backpacking.component.css']
})
export class BackpackingComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
 
backpacking = {
     titles: ['Uttarakhand Backpacking', 'Parvati Valley', 'Kinnaur Valley', 'Kasol Manali', 'Winter Spiti','Manali Kasol Tirthan Valley'],
     routes: ['uttarakhand-back', 'parvati-valley', 'kinnaur-valley', 'kasol-manali-back', 'winter-spiti-back', 'manali-kasol-trithan-back'], //leave this empty
     poster: ['assets/images/product/uttarakhand-bagpacking-product.jpg',
              'assets/images/product/parvati-valley-product.jpg',
              'assets/images/product/kinnaur-product.jpg',
              'assets/images/product/kasol-manali-product.jpg',
              'assets/images/product/spiti-product.jpg',
              'assets/images/product/kasol-manali-tirthan-product.jpg'
              ],
     duration: ['5D-4N', '5D-4N', '5D-4N', '5D-4N','7D-6N','5D-4N'],
     price: ['13,499', '9,999', '12,499','10,499','16,499','12,999'],
     pdlocation: ['Delhi', 'Delhi', 'Delhi','Delhi','Delhi','Delhi']  //pick and drop location
  };
  
}

