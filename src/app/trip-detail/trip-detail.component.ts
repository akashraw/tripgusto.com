import { Component, OnInit} from '@angular/core';
import { TripClass } from '../TripDataClass';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})

export class TripDetailComponent implements OnInit {
  
  
  tripVar: TripClass;
  capRoute: String;
  //trips: TripClass;
  constructor(private route:ActivatedRoute, private tripService:TripService, public sanitizer: DomSanitizer) { }
  urlSafe: SafeResourceUrl;
  url:string;
  ngOnInit(): void {
    
    this.capRoute=this.route.snapshot.params['TripRoute']
    this.getTripInfo();
    this.url=this.tripService.getTripInfos().find(o => o.route === this.capRoute).gmap;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  
  getTripInfo(){
    this.tripVar=this.tripService.getTripInfos().find(o => o.route === this.capRoute)
  //this.url=this.tripVar.gmap
   // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.tripVar.gmap);
   
  }
  
}
