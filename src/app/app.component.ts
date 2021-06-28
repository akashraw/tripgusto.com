import { GtagModule, Gtag } from 'angular-gtag';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { TitleService } from './/title.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
declare var $:any;

declare let gtag;
declare const navEndEvent;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title='analytics';  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_u18lfso', 'template_l7s0gkd', e.target as HTMLFormElement, 'user_qr8XtgpBb1qNh8naHnsTu')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  
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



}

       ngOnInit() {

        const navEndEvents = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd))
            .pipe( map(() => this.activatedRoute))
            .subscribe((event) => {
              $.getScript('assets/js/custom.js');
              
        });
       // navEndEvent.subscribe((event: NavigationEnd) =>{
         //   gtag('config', 'UA-194344967-1', {
           //   'page_path': event.urlAfterRedirects
            //});            
        //});
       
        

        
  }
        
    
    
      
}

