import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-hospital-recruit-detail',
  templateUrl: './hospital-recruit-detail.component.html',
  styleUrls: ['./hospital-recruit-detail.component.css']
})
export class HospitalRecruitDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  title = this.route.snapshot.queryParamMap.get('title');

  content =  this.route.snapshot.paramMap.get('content') || sessionStorage.getItem('recruitDetail');
  
  constructor(private route: ActivatedRoute, private router:Router, private homeService: HomeService) { }

  ngOnInit() {
    if(!this.content) {
      this.router.navigateByUrl('/hospitalRecruit');
    }
  }

}
