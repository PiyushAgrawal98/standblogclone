import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import{ HttpModule} from '@angular/http';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import{FormsModule} from '@angular/forms';


import { CarouselComponent } from './modules/home/carousel/carousel.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { CarouselItemComponent } from './modules/home/carousel/components/carousel-item/carousel-item.component';
import { TemplateBannerComponent } from './modules/shared/template-banner/template-banner.component';
import { PostComponent } from './modules/shared/post/post.component';
import { PostSearchComponent } from './modules/shared/post-search/post-search.component';
import { RecentPostComponent } from './modules/shared/recent-post/recent-post.component';
import { CategoriesComponent } from './modules/shared/categories/categories.component';
import { TagCloudComponent } from './modules/shared/tag-cloud/tag-cloud.component';
import { SharedComponent } from './modules/shared/shared/shared.component';
import { ModuleBannerComponent } from './modules/shared/module-banner/module-banner.component';
import { AboutUsDetailsComponent } from './modules/about-us/components/about-us-details/about-us-details.component';
import { AboutUsComponent } from './modules/about-us/about-us/about-us.component';
import { BriefDescriptionComponent } from './modules/about-us/components/brief-description/brief-description.component';
import { CommentsComponent } from './modules/post-details/components/comments/comments.component';
import { YourCommentsComponent } from './modules/post-details/components/your-comments/your-comments.component';
import { CommentComponent } from './modules/post-details/components/comment/comment.component';
import { ContactUsComponent } from './modules/contact-us/contact-us/contact-us.component';
import { SendUsMessageComponent } from './modules/contact-us/components/send-us-message/send-us-message.component';
import { ContactInformationComponent } from './modules/contact-us/components/contact-information/contact-information.component';
import { AddressGeoMapComponent } from './modules/contact-us/components/address-geo-map/address-geo-map.component';
import { BlogEntriesComponent } from './modules/blog-entries/blog-entries/blog-entries.component';
import { CoreComponent } from './modules/core/core/core.component';
import { HomeComponent } from './modules/home/home/home.component';
import { PostDetailsComponent } from './modules/post-details/post-details/post-details.component';
import { PageNotFoundComponent } from './modules/core/page-not-found/page-not-found.component';
import { HardikComponent } from './hardik/hardik/hardik.component';



const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    CarouselItemComponent,
    TemplateBannerComponent,
    PostComponent,
    PostSearchComponent,
    RecentPostComponent,
    CategoriesComponent,
    TagCloudComponent,
    SharedComponent,
    ModuleBannerComponent,
    AboutUsDetailsComponent,
    AboutUsComponent,
    BriefDescriptionComponent,
    CommentsComponent,
    YourCommentsComponent,
    CommentComponent,
    ContactUsComponent,
    SendUsMessageComponent,
    ContactInformationComponent,
    AddressGeoMapComponent,
    BlogEntriesComponent,
    CoreComponent,
    HomeComponent,
    PostDetailsComponent,
    PageNotFoundComponent,
    HardikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    // HttpModule,
    // NgbModule,
    // FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
