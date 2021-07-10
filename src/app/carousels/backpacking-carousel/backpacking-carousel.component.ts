import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TripService } from 'src/app/trip.service';
import { TripClass } from 'src/app/TripDataClass';

@Component({
  selector: 'app-backpacking-carousel',
  templateUrl: './backpacking-carousel.component.html',
  styleUrls: ['./backpacking-carousel.component.css']
})
export class BackpackingCarouselComponent implements OnInit {
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
