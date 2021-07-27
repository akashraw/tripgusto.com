import { GtagModule, Gtag } from 'angular-gtag';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { TitleService } from './/title.service';

declare var $:any;
declare let fbq:Function;
declare let gtag:Function;
declare const navEndEvent;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit{
  title='analytics';  

  
  constructor(  private router: Router, 
                private activatedRoute: ActivatedRoute, 
                private titleService: Title,
                private analTitle: TitleService,
                private gtag: Gtag)           
    {
//     {this.router.events.pipe(
//     filter(event => event instanceof NavigationEnd),
//     map(() => {
//         let child = this.activatedRoute.firstChild;
//         while (child) {
//             if (child.firstChild) {
//                 child = child.firstChild;
//             } else if (child.snapshot.data && child.snapshot.data['title']) {
//                 return child.snapshot.data['title'];
//             } else {
//                 return null;
//             }
//         }
//         return null;
//     })
// ).subscribe( (data: any) => {
//     if (data) {
//         this.titleService.setTitle(data + ' - Trip Gusto');
//     }
// });}
{
  this.analTitle.boot();
}
// router.events.subscribe((y: NavigationEnd) => {
//   if(y instanceof NavigationEnd){
//     fbq('track', 'PageView');
//   }
// })


}

       ngOnInit() {
        
        // const navEndEvents = this.router.events.pipe(
        //     filter(event => event instanceof NavigationEnd))
        //     .pipe( map(() => this.activatedRoute))
        //     .subscribe((event) => {
        //       $.getScript('assets/js/custom.js');
              
        // });
       // navEndEvent.subscribe((event: NavigationEnd) =>{
         //   gtag('config', 'UA-194344967-1', {
           //   'page_path': event.urlAfterRedirects
            //});            
        //});
       
        (window as any).fbq('track', 'PageView');

        
  }
        
    ngAfterViewInit(){
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();
      
          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
          });
    }
    
      
}

