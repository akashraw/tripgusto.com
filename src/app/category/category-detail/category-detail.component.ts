import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from 'src/app/category.service'; 
import { ActivatedRoute } from '@angular/router';
import { Cate } from '../category-data';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  
  catego: Category[];
  nCat: Category[];
  test:Category;
  capRoutePoster:string;
  capRoute:string;
  constructor(
      private catService: CategoryService,
      private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.capRoute=this.route.snapshot.params['rou']
    this.case(this.capRoute);
    this.getCategory();
  }
  
  // Calling category details from service methods
  case(snapped){
    switch (snapped){
      case "weekend": this.capRoute="Weekend Getaway Trips"; 
      this.capRoutePoster="background-image: url(assets/images/banners/nako.jpg);"; break

      case "backpacking": this.capRoute="Backpacking Trips"; 
      this.capRoutePoster="background-image: url(assets/images/banners/spiti-1.jpg);"; break

      case "pilgrim": this.capRoute="Pilgrims"; 
      this.capRoutePoster="background-image: url(assets/images/banners/kedar-badri-mb.jpg);"; break

      case "trek": this.capRoute="Treks"; 
      this.capRoutePoster="background-image: url(assets/images/banners/kedarkantha.jpg);"; break
    }
  }
  getCategory(): void {
  this.catego = this.catService.getCategory();
  this.nCat= this.catego.filter(o => o.categor === this.capRoute )
  
}

//  weekend = {
//   titles: ['Chopta Chandrashila Trip', 'Rishikesh Retreat', 'Nagtibba Trek', 'Tirthan Valley Trip', 'Auli Stay', 'Kasol Kheerganga'],

//   routes: ['chopta-chandrashills-weekend', 'rishikesh-retreat', 'nag-tibba', 'trithan-valley', 'auli-stay-trip', 'kasol-keerganga-weekend'], //leave this empty

//   poster: ["assets/images/uk-backpacking/slider/chopta.jpg", 
//            "assets/images/uk-backpacking/slider/chopta.jpg", 
//            "assets/images/uk-backpacking/slider/chopta.jpg", 
//            "assets/images/uk-backpacking/slider/chopta.jpg",
//            "assets/images/uk-backpacking/slider/chopta.jpg",
//            "assets/images/uk-backpacking/slider/chopta.jpg",         
//           ], //leave this empty

//   duration: ['3D- 2N', '3D-2N', '2D-1N','3D-2N', '3D-2N', '3D-2N'],

//   price: ['7999', '7499', '4999', '6499', '7999','4999'],
  
//   pdlocation: ['Delhi', 'Delhi', 'Dehradun', 'Delhi', 'Delhi', 'Delhi']  //pick and drop location
// };
  
}