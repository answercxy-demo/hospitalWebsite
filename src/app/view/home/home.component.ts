import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { StaticPath } from '../../common/static-path';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  serverPath = this.staticPath.SERVER_PATH;

  bannersData = {
    apiName: 'home'
  };

  // 新闻动态模块
  news_module = {
    title: {
      main: '新闻动态',
      vice: 'NEWS'
    },
    list: [],
    show: {
      sources: []
    }
  }

  // 了解人安模块
  about_module = {
    title: {
      main: '了解人安',
      vice: 'KNOW'
    },
    video: {
      source: {
        src: 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/play_video/ac4a698ffa95ed0482e6df8374f41522_H.264_338X270_HEAACV1_300.mp4',
        type: 'video/mp4'
      },
      width: 640,
      height: 360
    }
  }

  // 就医环境模块
  env_module = {
    title: {
      main: '就医环境',
      vice: 'ENVIROMENT'
    },
    items: [
      // {
      //   src: 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/2120.jpg', color: 'red'
      // }, {
      //   src: 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/55.jpg', color: '#ed6d46'
      // }, {
      //   src: 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/120.jpg', color: '#0789ff'
      // }, {
      //   src: 'https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/20.jpg', color: '#367925'
      // }
    ]
  }

  // 疾病科普模块
  disease_module = {
    title: {
      main: '疾病科普',
      vice: 'DISEASE SCIENCE'
    },
    items: []
  }

  constructor(private homeService: HomeService, private staticPath: StaticPath) { }

  ngOnInit() {

    this.getLatestNewsList();
    
    this.getEnvironment();

    this.getDiseaseList();
  }

  /**
   * @description: 获取就医环境图片 
   * @param {type} 
   * @return: 
   */
  getEnvironment(): void {
    this.homeService.getEnviroment('environment').subscribe((items) => {
      items.forEach((item, index, items) => {
        if (index < 4) {
          this.env_module.items.push({
            src: this.serverPath + item
          });
        }
      });
    })
  }

  /**
   * @description - 获取疾病科普列表信息 
   * @param {type} 
   * @return: 
   */
  getDiseaseList(): void {

    this.homeService.getDiseaseList().subscribe((items) => {
      for (let item of items) {

        // 疾病科普列表构造
        this.disease_module.items.push({
          id: item.id,
          name: item.dName,
          img: item.diseaseNameImage ? this.serverPath + item.diseaseNameImage.sUrl : '',
          color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`
        });

      }
    });

  }

  /**
   * @description: 获取最近新闻列表信息 
   * @param {type} 
   * @return: 
   */
  getLatestNewsList(): void {
    this.homeService.getLatestNewsList().subscribe((list) => {
      const REG = new RegExp("<[^>]+>", 'g');

      for (let item of list) {
        // 新闻列表构造
        this.news_module.list.push({
          id: item.id,
          year: item.primeTime.substr(0, 4),
          month: item.primeTime.substr(5, 2),
          day: item.primeTime.substr(8, 2),
          title: item.headLine,
          content: item.particulars.replace(REG, '').substr(0, 50)
        });

        // 新闻列表展示图片构造
        if (!!item.pictrueDetails) {
          for (let source of item.pictrueDetails) {
            if (this.news_module.show.sources.length < 2) {
              this.news_module.show.sources.push({
                src: this.serverPath + source.sUrl
              })
            }
          }
        }

      }

      this.news_module.list.splice(4, this.news_module.list.length - 4);

    });
  }

}
