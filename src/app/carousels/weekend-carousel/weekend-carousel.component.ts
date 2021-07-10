import { Component, Input, OnInit } from '@angular/core';
import { TripService } from 'src/app/trip.service';
import { TripClass } from 'src/app/TripDataClass';

@Component({
  selector: 'app-weekend-carousel',
  templateUrl: './weekend-carousel.component.html',
  styleUrls: ['./weekend-carousel.component.css']
})
export class WeekendCarouselComponent implements OnInit {
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
