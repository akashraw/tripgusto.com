import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TripService } from 'src/app/trip.service';
import { TripClass } from 'src/app/TripDataClass';
declare var $: any;
@Component({
  selector: 'app-treks-carousel',
  templateUrl: './treks-carousel.component.html',
  styleUrls: ['./treks-carousel.component.css']
})
export class TreksCarouselComponent implements OnInit, AfterViewInit {
  nCat: TripClass[];
  @Input('cat') cat:string;
 // @Input('cat') case:string;
 constructor(private tripService: TripService) { }

 ngOnInit(): void {
   this.getTripInfo();
 }

 getTripInfo(){
   this.nCat=this.tripService.getTripInfos().filter(o => o.categor === this.cat)
 }
    ngAfterViewInit(){
     $('#t-slider' ).owlCarousel({

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
