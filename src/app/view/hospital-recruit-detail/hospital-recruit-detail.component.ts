import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-hospital-recruit-detail',
  templateUrl: './hospital-recruit-detail.component.html',
  styleUrls: ['./hospital-recruit-detail.component.css']
})
export class HospitalRecruitDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  title = this.route.snapshot.queryParamMap.get('title');

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
  }

}
