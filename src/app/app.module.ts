import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
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

@NgModule({
  providers: [],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
    FastNavComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
