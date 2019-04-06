import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { TopMenuComponent } from './view/top-menu/top-menu.component';
import { HomeComponent } from './view/home/home.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { HospitalGuideComponent } from './view/hospital-guide/hospital-guide.component';
import { DepartmentInfoComponent } from './view/department-info/department-info.component';
import { HospitalEnvComponent } from './view/hospital-env/hospital-env.component';
import { HospitalRecruitComponent } from './view/hospital-recruit/hospital-recruit.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { BannersComponent } from './view/banners/banners.component';
import { FastNavComponent } from './view/fast-nav/fast-nav.component';
import { HomeTitleComponent } from './view/home-title/home-title.component';
import { NewsDetailComponent } from './view/news-detail/news-detail.component';
import { DiseaseDetailComponent } from './view/disease-detail/disease-detail.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { DepartmentInfoDetailComponent } from './view/department-info-detail/department-info-detail.component';
import { StaticTitleComponent } from './view/static-title/static-title.component';
import { HospitalRecruitDetailComponent } from './view/hospital-recruit-detail/hospital-recruit-detail.component';

@NgModule({
  providers: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopMenuComponent,
    HomeComponent,
    AboutUsComponent,
    HospitalGuideComponent,
    DepartmentInfoComponent,
    HospitalEnvComponent,
    HospitalRecruitComponent,
    ContactUsComponent,
    BannersComponent,
    FastNavComponent,
    HomeTitleComponent,
    NewsDetailComponent,
    DiseaseDetailComponent,
    PageNotFoundComponent,
    DepartmentInfoDetailComponent,
    StaticTitleComponent,
    HospitalRecruitDetailComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
