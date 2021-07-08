import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service'; 
import { ActivatedRoute } from '@angular/router';
import { TripClass } from 'src/app/TripDataClass';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  nCat: TripClass[];
  
  capRoutePoster:string;
  capRoute:string;
  constructor(
      private catService: CategoryService,
      private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.capRoute=this.route.snapshot.params['CatDetailRoute']
    this.CategoryCase(this.capRoute);
    this.getCategory();
  }
  
  // Calling category details from service methods
  CategoryCase(snapped){
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
  
  this.nCat= this.catService.getCategory().filter(o => o.categor === this.capRoute )
  
}

  
}