import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { StaticPath } from '../../common/static-path';

@Component({
  selector: 'app-hospital-env',
  templateUrl: './hospital-env.component.html',
  styleUrls: ['./hospital-env.component.css']
})
export class HospitalEnvComponent implements OnInit {

  serverPath = this.staticPath.SERVER_PATH;

  env_title = {
    main: '就医环境',
    vice: 'ENVIRONMENT'
  };

  bannersData = {
    apiName: 'hospitalEnv'
  };

  healing_title = {
    main: '康复园地',
    vice: 'HEALING GARDEN'
  }

  env_items = [];

  healing_items = []

  constructor(private homeService: HomeService, private staticPath: StaticPath) { }

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
    this.homeService.getEnviroment('environment').subscribe((list) => {
      list.forEach(imgUrl => {
        this.env_items.push({
          src: this.serverPath + imgUrl
        })
      });
    });
  }

  /**
   * @description: 获取康复园地的图片资源
   * @param {type} 
   * @return: 
   */
  getHealingItems(): void {
    this.homeService.getEnviroment('garden').subscribe((list) => {
      list.forEach(imgUrl => {
        this.healing_items.push({
          src: this.serverPath + imgUrl
        })
      });
    });
  }

}
