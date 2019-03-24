import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');

  title = this.route.snapshot.queryParamMap.get('title');

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
