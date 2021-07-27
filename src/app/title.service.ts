import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import {Gtag} from "angular-gtag";
@Injectable({
  providedIn: 'root',
})

export class TitleService {
  default_title = 'Trip Gusto';
  capRoute:string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private title: Title,
    private gtag: Gtag
  ) { }

  boot() {
    this.capRoute=this.activeRoute.snapshot.params['TripRoute']
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activeRoute),
      map(route => route.firstChild),
      switchMap(route => route.data),
      map((data) => {

        //here goes the GA reporting code            

        this.gtag.pageview({
          page_title: this.capRoute ? this.capRoute: data && data.title ? data.title : this.default_title,
          page_path: this.router.url,
          page_location: 'www.tripgusto.com/' + this.router.url
        });

        return data && data.title ? `${data.title} • ${this.default_title}` : this.default_title;
      })
    ).subscribe((current_title) => this.title.setTitle(current_title));
  }
}