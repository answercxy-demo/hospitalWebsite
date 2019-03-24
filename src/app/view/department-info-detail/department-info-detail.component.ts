import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-department-info-detail',
  templateUrl: './department-info-detail.component.html',
  styleUrls: ['./department-info-detail.component.css']
})
export class DepartmentInfoDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  name = this.route.snapshot.queryParamMap.get('name');

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
