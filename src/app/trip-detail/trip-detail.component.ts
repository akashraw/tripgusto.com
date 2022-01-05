import { Component, HostListener, Inject, OnInit, AfterViewInit} from '@angular/core';
import { TripClass } from '../TripDataClass';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
declare var $:any;

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})

export class TripDetailComponent implements OnInit, AfterViewInit{

  stick_var= true;
  stick_var_after: boolean;
  sticky: any;
  resize: any;
  tripVar: TripClass;
  capRoute: String;

  constructor(private route:ActivatedRoute, private tripService:TripService, 
              public sanitizer: DomSanitizer, @Inject(DOCUMENT) public document, private titleService: Title) { this.getScreenSize();}
 
              urlSafe: SafeResourceUrl;
              url:string;

  ngOnInit(): void {
        this.capRoute=this.route.snapshot.params['TripRoute']
        this.getTripInfo();
        this.url=this.tripService.getTripInfos().find(o => o.route === this.capRoute).gmap;
        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var cusbtn = document.getElementById("myBtn");
     
        // Get the <span> element that closes the modal
        var span: HTMLElement = document.getElementsByClassName("close")[0] as HTMLElement;
     
        // When the user clicks the button, open the modal 
        cusbtn.onclick = function() {
          modal.style.display = "block";
        }
      
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

      }

  ngAfterViewInit(){
            var bigimage = $("#big");
        var thumbs = $("#thumbs");
        //var totalslides = 10;
        var syncedSecondary = true;

        bigimage
          .owlCarousel({
          items: 1,
          slideSpeed: 2000,
          lazyLoad:true,
          nav: false,
          autoplay: true,
          dots: false,
          loop: true,
          responsiveRefreshRate: 200,
        //  navText: [
        //    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        //    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        //    ]
        })
          .on("changed.owl.carousel", syncPosition);

        thumbs
          .on("initialized.owl.carousel", function() {
          thumbs
            .find(".owl-item")
            .eq(0)
            .addClass("current");
        })
          .owlCarousel({
          items: 4,
          dots: true,
          nav: false,
          lazyLoad:true,
         // navText: [
        //    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        //    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        //   ],
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: 4,
          responsiveRefreshRate: 100
        })
          .on("changed.owl.carousel", syncPosition2);

        function syncPosition(el) {
          //if loop is set to false, then you have to uncomment the next line
          //var current = el.item.index;
        
          //to disable loop, comment this block
          var count = el.item.count - 1;
          var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        
          if (current < 0) {
            current = count;
          }
          if (current > count) {
            current = 0;
          }
          //to this
          thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = thumbs.find(".owl-item.active").length - 1;
          var start = thumbs
          .find(".owl-item.active")
          .first()
          .index();
          var end = thumbs
          .find(".owl-item.active")
          .last()
          .index();
        
          if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
          }
          if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
          }
        }

        function syncPosition2(el) {
          if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
          }
        }

        thumbs.on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = $(this).index();
          bigimage.data("owl.carousel").to(number, 300, true);
        });
        

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
  
  getTripInfo(){
    this.tripVar=this.tripService.getTripInfos().find(o => o.route === this.capRoute)
    this.titleService.setTitle(this.tripVar.title + ` • `+ this.tripVar.categor + ` • ` + `TripGusto`);
      }

  
//   setDocTitle(title: string) {
//     console.log('current title:::::' + this.titleService.getTitle());
//     this.titleService.setTitle(title);
//  }

}
