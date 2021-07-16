import { TreksCarouselComponent } from './carousels/treks-carousel/treks-carousel.component';
import {  RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule, RoutedBasicComponents, RoutedTripComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { HeaderComponent } from './header/header.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { TrendingCarouselComponent } from './carousels/trending-carousel/trending-carousel.component';
import { WeekendCarouselComponent } from './carousels/weekend-carousel/weekend-carousel.component';
import { BackpackingCarouselComponent } from './carousels/backpacking-carousel/backpacking-carousel.component';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import {TitleService} from "./title.service";
import {GtagModule} from "angular-gtag";
import { EnquiryComponent } from './enquiry/enquiry.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { CategoryCarouselComponent } from './carousels/category-carousel/category-carousel.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CallBackModalComponent } from './call-back-modal/call-back-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    RoutedBasicComponents,
    RoutedTripComponents,
    FooterComponent,
    PreloaderComponent,  
    HeaderComponent,
    
    TrendingCarouselComponent,
    WeekendCarouselComponent,
    BackpackingCarouselComponent,
    TreksCarouselComponent,
    EnquiryComponent,
    BookNowComponent,
    ModalComponent,
    CategoryCarouselComponent,
    CategoryDetailComponent,
    TripDetailComponent,
    CallBackModalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GtagModule.forRoot({ trackingId: 'UA-194344967-1', trackPageviews: true })
    
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}, Title, TitleService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
