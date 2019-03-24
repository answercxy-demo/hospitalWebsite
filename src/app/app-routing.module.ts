import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { HospitalGuideComponent } from './view/hospital-guide/hospital-guide.component';
import { HospitalRecruitComponent } from './view/hospital-recruit/hospital-recruit.component';
import { HospitalEnvComponent } from './view/hospital-env/hospital-env.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { DepartmentInfoComponent } from './view/department-info/department-info.component';

import { NewsDetailComponent } from './view/news-detail/news-detail.component';
import { DiseaseDetailComponent } from './view/disease-detail/disease-detail.component';
import { DepartmentInfoDetailComponent } from './view/department-info-detail/department-info-detail.component'

import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'departmentInfo', component: DepartmentInfoComponent },
  { path: 'hospitalGuide', component: HospitalGuideComponent },
  { path: 'hospitalRecruit', component: HospitalRecruitComponent },
  { path: 'hospitalEnv', component: HospitalEnvComponent },
  { path: 'newsDetail/:id', component: NewsDetailComponent, data: { from: 'home' } },
  { path: 'diseaseDetail/:id', component: DiseaseDetailComponent, data: { from: 'home' } },
  { path: 'departmentInfoDetail/:id', component: DepartmentInfoDetailComponent, data: { from: 'departmentInfo' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
