import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { AboutUsComponent } from './view/about-us/about-us.component';
import { HospitalGuideComponent } from './view/hospital-guide/hospital-guide.component';
import { HospitalRecruitComponent } from './view/hospital-recruit/hospital-recruit.component';
import { HospitalEnvComponent } from './view/hospital-env/hospital-env.component';
import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { DepartmentInfoComponent } from './view/department-info/department-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'departmentInfo', component: DepartmentInfoComponent },
  { path: 'hospitalGuide', component: HospitalGuideComponent },
  { path: 'hospitalRecruit', component: HospitalRecruitComponent },
  { path: 'hospitalEnv', component: HospitalEnvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
