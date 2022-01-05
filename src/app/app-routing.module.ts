import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Title } from '@angular/platform-browser';
import { PrivacyComponent } from './privacy/privacy.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { NoPageComponent } from './no-page/no-page.component';
import { TestComponent } from './test/test.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TermsComponent } from './terms/terms.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

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
    path:'trips/:TripRoute', component: TripDetailComponent, pathMatch:'full'
  },
  //category routes start
  {
    path:'category/:CatDetailRoute', component: CategoryDetailComponent, pathMatch:'full'
    
  },
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
    path:'signin',component:SignInComponent, pathMatch:'full', data:{title: 'Sign In'}
  },
  {
    path:'signup',component:SignUpComponent, pathMatch:'full', data:{title: 'Sign Up'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutedBasicComponents = [TestComponent, NoPageComponent, BlogDetailsComponent, BlogsComponent, TermsComponent, TestimonialsComponent, PrivacyComponent, CancellationComponent, ContactUsComponent, HomeComponent, AboutUsComponent]
export const RoutedTripComponents = []