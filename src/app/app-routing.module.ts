import { Title } from '@angular/platform-browser';
import { KasolManaliBackComponent } from './all-trips/trips-details/kasol-manali-back/kasol-manali-back.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CancellationComponent } from './cancellation/cancellation.component';

import { WinterSpitiBackComponent } from './all-trips/trips-details/winter-spiti-back/winter-spiti-back.component';
import { ValleyOfFlowersComponent } from './all-trips/trips-details/valley-of-flowers/valley-of-flowers.component';
import { TrithanValleyComponent } from './all-trips/trips-details/trithan-valley/trithan-valley.component';
import { RishikeshRetreatComponent } from './all-trips/trips-details/rishikesh-retreat/rishikesh-retreat.component';
import { ParvatiValleyComponent } from './all-trips/trips-details/parvati-valley/parvati-valley.component';
import { NagTibbaComponent } from './all-trips/trips-details/nag-tibba/nag-tibba.component';
import { ManaliKasolTrithanBackComponent } from './all-trips/trips-details/manali-kasol-trithan-back/manali-kasol-trithan-back.component';
import { KinnaurValleyBackComponent } from './all-trips/trips-details/kinnaur-valley-back/kinnaur-valley-back.component';
import { KedarnathDhamComponent } from './all-trips/trips-details/kedarnath-dham/kedarnath-dham.component';
import { KedarkanthaTrekComponent } from './all-trips/trips-details/kedarkantha-trek/kedarkantha-trek.component';
import { KedarBadriDhamComponent } from './all-trips/trips-details/kedar-badri-dham/kedar-badri-dham.component';
import { KasolKeergangaWeekendComponent } from './all-trips/trips-details/kasol-keerganga-weekend/kasol-keerganga-weekend.component';
import { HarKiDunTrekComponent } from './all-trips/trips-details/har-ki-dun-trek/har-ki-dun-trek.component';
import { ChoptaChandrashillaWeekendComponent } from './all-trips/trips-details/chopta-chandrashilla-weekend/chopta-chandrashilla-weekend.component';
import { CharDhamComponent } from './all-trips/trips-details/char-dham/char-dham.component';
import { BadrinathDhamComponent } from './all-trips/trips-details/badrinath-dham/badrinath-dham.component';
import { UttarakhandBackpackingComponent } from './all-trips/trips-details/uttarakhand-backpacking/uttarakhand-backpacking.component';
import { NoPageComponent } from './no-page/no-page.component';
import { TestComponent } from './test/test.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BlogsComponent } from './blogs/blogs.component';
import { TermsComponent } from './terms/terms.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { AuliComponent } from './all-trips/trips-details/auli/auli.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent, pathMatch:'full',
    data: {title: 'About-Us'}
  },
  {
    path:'home',component:HomeComponent, pathMatch:'full', data: {title: 'Home'}
  },
   
  {
    path:'contact-us',component:ContactUsComponent, pathMatch:'full', data: {title: 'Contact-Us'}
  },
  {
    path:'cancellation', component: CancellationComponent, pathMatch:'full', data:{title: 'Cancellation'}
  },
  {
    path:'privacy', component: PrivacyComponent, pathMatch:'full', data:{title: 'Privacy'}
  },
  {
    path:'testimonials',component:TestimonialsComponent, pathMatch:'full', data:{title: 'Testimonials'}
  },
  {
    path:'terms',component:TermsComponent, pathMatch:'full', data:{title: 'Terms'}
  },
  //trip detail
  {
    path:'trips/:TripRoute', component: TripDetailComponent, pathMatch:'full', data:{title: 'Weekend Getaway Trips'}
  },
  //category routes start
  {
    path:'category/:CatDetailRoute', component: CategoryDetailComponent, pathMatch:'full', data:{title: 'Weekend Getaway Trips'}
    // children:[
    //   { path:'weekend', component: CategoryDetailComponent, pathMatch:'full', data:{title: 'Weekend Getaway Trips'}},
    //   { path:'backpacking', component: CategoryDetailComponent, pathMatch:'full', data:{title: 'Backpacking Trips'}},
    //   { path:'pilgrim', component: CategoryDetailComponent, pathMatch:'full', data:{title: 'Pilgrim'}},
    //   { path:'trek', component: CategoryDetailComponent, pathMatch:'full', data:{title: 'Trek'}},
    // ]
  },
  //category routes ends
  //trip routes
  {
    path:'trip', 
    children:[
      { path:'auli-stay-trip', component:AuliComponent, pathMatch:'full', data:{title: 'Auli Weekend'} },
      { path:'badrinath-dham', component:BadrinathDhamComponent, pathMatch:'full', data:{title: 'Badrinath Dham'} },
      { path:'char-dham', component:CharDhamComponent, pathMatch:'full', data:{title: 'Char Dham'} },
      { path:'chopta-chandrashills-weekend', component:ChoptaChandrashillaWeekendComponent, pathMatch:'full', data:{title: 'Chopta Chandrashilla Weekend'} },
      { path:'har-ki-dun-trek', component:HarKiDunTrekComponent, pathMatch:'full', data:{title: 'Har-Ki-Dun Trek'} },
      { path:'kasol-keerganga-weekend', component:KasolKeergangaWeekendComponent, pathMatch:'full', data:{title: 'Kasol Keerganga Weekend'} },
      { path:'kasol-manali-back', component:KasolManaliBackComponent, pathMatch:'full', data:{title: 'Kasol Manali Backpacking'} },
      { path:'kedar-badri-dham', component:KedarBadriDhamComponent, pathMatch:'full', data:{title: 'Kedar-Badri Dham'} },
      { path:'kedarkantha-trek', component:KedarkanthaTrekComponent, pathMatch:'full', data:{title: 'Kedarkantha Trek'} },
      { path:'kedarnath-dham', component:KedarnathDhamComponent, pathMatch:'full', data:{title: 'Kedarnath Dham'} },
      { path:'kinnaur-valley', component:KinnaurValleyBackComponent, pathMatch:'full', data:{title: 'Kinnaur Valley Backpacking'} },
      { path:'manali-kasol-trithan-back', component:ManaliKasolTrithanBackComponent , pathMatch:'full', data:{title: 'Manali Kasol Trithan Backpacking'} },
      { path:'nag-tibba', component:NagTibbaComponent, pathMatch:'full', data:{title: 'Nag Tibba'} },
      { path:'parvati-valley', component:ParvatiValleyComponent, pathMatch:'full', data:{title: 'Parvati Valley'} },
      { path:'rishikesh-retreat', component: RishikeshRetreatComponent, pathMatch:'full', data:{title: 'Rishikesh Retreat'} },
      { path:'trithan-valley', component: TrithanValleyComponent, pathMatch:'full', data:{title: 'Trithan Valley'} },
      { path:'valley-of-flowers', component: ValleyOfFlowersComponent, pathMatch:'full', data:{title: 'Valley Of Flower'} },
      { path:'winter-spiti-back', component: WinterSpitiBackComponent, pathMatch:'full', data:{title: 'Winter Spiti Backpacking'} },
      { path:'uttarakhand-back',component:UttarakhandBackpackingComponent, pathMatch:'full', data:{title: 'Uttarakhand Backpacking'} }     
    ]
  },
  //misc routes
  {
    path:'blogs',component:BlogsComponent, pathMatch:'full', data:{title: 'Blogs'}
  },
  {
    path:'blog-details',component:BlogDetailsComponent, pathMatch:'full', data:{title: 'Blog'}
  },
  {
    path:'nopage',component:NoPageComponent, pathMatch:'full', data:{title: '404-No-page'}
  },
  {
    path:'test',component:TestComponent, pathMatch:'full', data:{title: 'test'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top', useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutedBasicComponents = [TestComponent, NoPageComponent, BlogDetailsComponent, BlogsComponent, TermsComponent, TestimonialsComponent, PrivacyComponent, CancellationComponent, ContactUsComponent, HomeComponent, AboutUsComponent]
export const RoutedTripComponents = [UttarakhandBackpackingComponent, WinterSpitiBackComponent, ValleyOfFlowersComponent, TrithanValleyComponent, RishikeshRetreatComponent, ParvatiValleyComponent, NagTibbaComponent, ManaliKasolTrithanBackComponent, KinnaurValleyBackComponent, KedarnathDhamComponent, KedarkanthaTrekComponent, KedarBadriDhamComponent, KasolManaliBackComponent, KasolKeergangaWeekendComponent, HarKiDunTrekComponent, ChoptaChandrashillaWeekendComponent, CharDhamComponent,BadrinathDhamComponent, AuliComponent]