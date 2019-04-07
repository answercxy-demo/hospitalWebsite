import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-department-info-detail',
  templateUrl: './department-info-detail.component.html',
  styleUrls: ['./department-info-detail.component.css']
})
export class DepartmentInfoDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  name = this.route.snapshot.queryParamMap.get('name');

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.getDepartmentDetail();
  }

  getDepartmentDetail(): void {
    this.homeService.getDepartmentDetail({ id: this.id }).subscribe((item) => {
      document.getElementById(this.id).innerHTML = item ? item[0].sContent : '暂无信息';
    });
  }

}
