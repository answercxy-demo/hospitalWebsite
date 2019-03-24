import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  title = this.route.snapshot.queryParamMap.get('title');

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {

    this.getNewsDetail();

  }

  getNewsDetail(): void {
    this.homeService.getNewsDetail({ id: this.id }).subscribe((item) => {
      document.getElementById(this.id).innerHTML = item.particulars;
    });
  }

}
