import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-hospital-env',
  templateUrl: './hospital-env.component.html',
  styleUrls: ['./hospital-env.component.css']
})
export class HospitalEnvComponent implements OnInit {

  env_title = {
    main: '就医环境',
    vice: 'ENVIRONMENT'
  };

  healing_title = {
    main: '康复园地',
    vice: 'HEALING GARDEN'
  }

  env_items = [];

  healing_items = []

  constructor(private homeService: HomeService) { }

  ngOnInit() {

    this.getEnvItems();

    this.getHealingItems();

  }

  /**
   * @description: 获取就医环境的图片资源
   * @param {type} 
   * @return: 
   */
  getEnvItems(): void {
    // this.homeService.getLatestNewsList().subscribe((list)
    // array.forEach(element => {

    // });
    for (let i = 0; i < 3; i++) {
      this.env_items.push({
        src:`https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/1${Math.floor(Math.random() * 50)}5.jpg`,
      })
    }
  }

  /**
   * @description: 获取康复园地的图片资源
   * @param {type} 
   * @return: 
   */
  getHealingItems(): void {
    // this.homeService.getLatestNewsList().subscribe((list)
    // array.forEach(element => {

    // });
    for (let i = 0; i < 7; i++) {
      this.healing_items.push({
        src:`https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/4${Math.floor(Math.random() * 50)}5.jpg`,
      })
    }
  }

}
