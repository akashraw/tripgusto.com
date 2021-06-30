import { TreksCarouselComponent } from './carousels/treks-carousel/treks-carousel.component';
import {  RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { NoPageComponent } from './no-page/no-page.component';
import { TermsComponent } from './terms/terms.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { TestComponent } from './test/test.component';
import { AuliComponent } from './all-trips/trips-details/auli/auli.component';
import { ValleyOfFlowersComponent } from './all-trips/trips-details/valley-of-flowers/valley-of-flowers.component';
import { NagTibbaComponent } from './all-trips/trips-details/nag-tibba/nag-tibba.component';
import { ParvatiValleyComponent } from './all-trips/trips-details/parvati-valley/parvati-valley.component';
import { UttarakhandBackpackingComponent } from './all-trips/trips-details/uttarakhand-backpacking/uttarakhand-backpacking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatListModule} from '@angular/material/list';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ManaliKasolTrithanBackComponent } from './all-trips/trips-details/manali-kasol-trithan-back/manali-kasol-trithan-back.component';
import { TrithanValleyComponent } from './all-trips/trips-details/trithan-valley/trithan-valley.component';
import { KasolKeergangaWeekendComponent } from './all-trips/trips-details/kasol-keerganga-weekend/kasol-keerganga-weekend.component';
import { KasolManaliBackComponent } from './all-trips/trips-details/kasol-manali-back/kasol-manali-back.component';
import { WinterSpitiBackComponent } from './all-trips/trips-details/winter-spiti-back/winter-spiti-back.component';
import { BadrinathDhamComponent } from './all-trips/trips-details/badrinath-dham/badrinath-dham.component';
import { KedarkanthaTrekComponent } from './all-trips/trips-details/kedarkantha-trek/kedarkantha-trek.component';
import { KinnaurValleyBackComponent } from './all-trips/trips-details/kinnaur-valley-back/kinnaur-valley-back.component';
import { RishikeshRetreatComponent } from './all-trips/trips-details/rishikesh-retreat/rishikesh-retreat.component';
import { KedarnathDhamComponent } from './all-trips/trips-details/kedarnath-dham/kedarnath-dham.component';
import { ChoptaChandrashillaWeekendComponent } from './all-trips/trips-details/chopta-chandrashilla-weekend/chopta-chandrashilla-weekend.component';
import { HarKiDunTrekComponent } from './all-trips/trips-details/har-ki-dun-trek/har-ki-dun-trek.component';
import { CharDhamComponent } from './all-trips/trips-details/char-dham/char-dham.component';
import { KedarBadriDhamComponent } from './all-trips/trips-details/kedar-badri-dham/kedar-badri-dham.component';
import { WeekendComponent } from './category/weekend/weekend.component';
import { PilgrimComponent } from './category/pilgrim/pilgrim.component';
import { BackpackingComponent } from './category/backpacking/backpacking.component';
import { TreksComponent } from './category/treks/treks.component';
import { CorporateComponent } from './category/corporate/corporate.component';
import { AllGirlsComponent } from './category/all-girls/all-girls.component';
import { PrivateComponent } from './category/private/private.component';
import { BikeTripsComponent } from './category/bike-trips/bike-trips.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TrendingCarouselComponent } from './carousels/trending-carousel/trending-carousel.component';
import { WeekendCarouselComponent } from './carousels/weekend-carousel/weekend-carousel.component';
import { BackpackingCarouselComponent } from './carousels/backpacking-carousel/backpacking-carousel.component';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TitleService} from "./title.service";
import {GtagModule} from "angular-gtag";
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PreloaderComponent,
    AllTripsComponent,  
    NoPageComponent,
    TermsComponent,
    TestimonialsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    BlogsComponent,
    BlogDetailsComponent,
    TestComponent,
    AuliComponent,
    ValleyOfFlowersComponent,
    NagTibbaComponent,
    ParvatiValleyComponent,
    UttarakhandBackpackingComponent,    
    ManaliKasolTrithanBackComponent,
    TrithanValleyComponent,
    KasolKeergangaWeekendComponent,
    KasolManaliBackComponent,
    WinterSpitiBackComponent,
    BadrinathDhamComponent,
    KedarkanthaTrekComponent,
    KinnaurValleyBackComponent,
    RishikeshRetreatComponent,
    KedarnathDhamComponent,
    ChoptaChandrashillaWeekendComponent,
    HarKiDunTrekComponent,
    CharDhamComponent,
    KedarBadriDhamComponent,
    WeekendComponent,
    PilgrimComponent,
    BackpackingComponent,
    TreksComponent,
    CorporateComponent,
    AllGirlsComponent,
    PrivateComponent,
    BikeTripsComponent,
    CancellationComponent,
    PrivacyComponent,
    TrendingCarouselComponent,
    WeekendCarouselComponent,
    BackpackingCarouselComponent,
    TreksCarouselComponent,
    EnquiryComponent,
    BookNowComponent,
    ModalComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatCarouselModule.forRoot(),
    GtagModule.forRoot({ trackingId: 'UA-194344967-1', trackPageviews: true })
    
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, Title, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
