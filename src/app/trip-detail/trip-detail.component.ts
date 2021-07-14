import { Component, HostListener, Inject, OnInit} from '@angular/core';
import { TripClass } from '../TripDataClass';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})

export class TripDetailComponent implements OnInit {
  stick_var= true;
  stick_var_after: boolean;
  sticky: any;
  resize: any;
  tripVar: TripClass;
  capRoute: String;
  //trips: TripClass;
  constructor(private route:ActivatedRoute, private tripService:TripService, 
              public sanitizer: DomSanitizer, @Inject(DOCUMENT) public document) { this.getScreenSize();}
  urlSafe: SafeResourceUrl;
  url:string;
  ngOnInit(): void {
    // this.sticky =this.document.getElementById("map")
    // console.log(this.sticky);
    this.capRoute=this.route.snapshot.params['TripRoute']
    this.getTripInfo();
    this.url=this.tripService.getTripInfos().find(o => o.route === this.capRoute).gmap;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.resize = window.innerWidth;
        if (this.resize<= 991){
          this.stick_var_after= true;
          this.stick_var= false;
        }
        else{
          this.stick_var=true;
          this.stick_var_after=false;
        }
  }
  // @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  //   let event=$event
  //   if (window.pageYOffset  >= 3093) {
  //     this.stick_var=false;
  //     this.stick_var_after=true;
  //   } else {
  //     this.stick_var=true;
  //     this.stick_var_after=false;
  //   }
  // } 
  
  getTripInfo(){
    this.tripVar=this.tripService.getTripInfos().find(o => o.route === this.capRoute)
   
  }

}
