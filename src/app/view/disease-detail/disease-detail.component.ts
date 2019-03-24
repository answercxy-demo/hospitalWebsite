import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disease-detail',
  templateUrl: './disease-detail.component.html',
  styleUrls: ['./disease-detail.component.css']
})
export class DiseaseDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  name = this.route.snapshot.queryParamMap.get('name');

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
