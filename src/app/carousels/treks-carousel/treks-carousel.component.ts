import { Component, Input, OnInit } from '@angular/core';
import { TripService } from 'src/app/trip.service';
import { TripClass } from 'src/app/TripDataClass';

@Component({
  selector: 'app-treks-carousel',
  templateUrl: './treks-carousel.component.html',
  styleUrls: ['./treks-carousel.component.css']
})
export class TreksCarouselComponent implements OnInit {
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
}
