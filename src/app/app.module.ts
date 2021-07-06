import { TreksCarouselComponent } from './carousels/treks-carousel/treks-carousel.component';
import {  RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule, RoutedBasicComponents, RoutedTripComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { AllTripsComponent } from './all-trips/all-trips.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatListModule} from '@angular/material/list';
import { MatCarouselModule } from '@ngmodule/material-carousel';


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
import { CategoryService } from './category.service';
import { CategoryCarouselComponent } from './carousels/category-carousel/category-carousel.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutedBasicComponents,
    RoutedTripComponents,
    FooterComponent,
    PreloaderComponent,
    AllTripsComponent,    
    HeaderComponent,    
    
    TrendingCarouselComponent,
    WeekendCarouselComponent,
    BackpackingCarouselComponent,
    TreksCarouselComponent,
    EnquiryComponent,
    BookNowComponent,
    ModalComponent,
    CategoryCarouselComponent,
    CategoryDetailComponent
    
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
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, Title, TitleService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
