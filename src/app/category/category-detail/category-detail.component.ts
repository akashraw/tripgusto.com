import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripClass } from 'src/app/TripDataClass';
import { TripService } from 'src/app/trip.service';
import { Title } from '@angular/platform-browser';
declare var $:any;

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, AfterViewInit {
  nCat: TripClass[];
  
  capRoutePoster:string;
  capRoute:string;
  constructor(
      private catService: TripService,
      private route: ActivatedRoute,
      private titleService: Title
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
  
  this.nCat= this.catService.getTripInfos().filter(o => o.categor === this.capRoute )
  this.titleService.setTitle(this.capRoute + ` • ` + `TripGusto`);
}
ngAfterViewInit(){
  $('#category-sliders').owlCarousel({    
    lazyLoad:true,
    items: 4,
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

