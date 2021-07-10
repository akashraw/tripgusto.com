import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.css']
})
export class CategoryCarouselComponent implements OnInit {
 
  constructor(
      public catService: CategoryService,
      private route: ActivatedRoute,
      public router:Router
  ) { }
  
  ngOnInit(): void {
    //this.getCategory()
  }
  // onClick(){
  //   this.pass.emit(this.category.pass)
  // }
 
  // Calling category details from service methods
 
  // getCategory(): void {
  // this.catego = this.catService.getCategory();
  // this.nCat= this.catego.filter(o => o.categor === 'bike' )
  // this.test=this.nCat.find(o=>o.categor=== 'bike')
  // console.log(this.catego);
  // }
  category = {
    pass: ['Backpacking Trips', 'Weekend Getaway Trips', 'Pilgrims', 'Treks'], 
    routes: ['backpacking', 'weekend', 'pilgrim', 'trek'], //leave this empty
    slides: ["assets/images/category/backpacking-poster.jpg", 
             "assets/images/category/weekend-poster.jpg", 
             "assets/images/category/pilgrim-poster.jpg",
             "assets/images/category/trek-poster.jpg"        
            ], //leave this empty  
  };
  
}
