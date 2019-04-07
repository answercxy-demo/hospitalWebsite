import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-disease-detail',
  templateUrl: './disease-detail.component.html',
  styleUrls: ['./disease-detail.component.css']
})
export class DiseaseDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  name = this.route.snapshot.queryParamMap.get('name');

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {

    this.getDisease();

  }

  getDisease(): void {
    this.homeService.getDiseaseDetail({ id: this.id }).subscribe((item) => {
      document.getElementById(this.id).innerHTML = item[0].dContents;
    });
  }

}
