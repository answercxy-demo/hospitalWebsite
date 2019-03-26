import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
        src: 'https://107.cdn-vod.huaweicloud.com/asset/2b8ab25bcb75eaebdae188a1013f90a1/670c035f6e416c67f3e5dc2ff2fe070c.mp4',
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
      {
        src: 'https://107.cdn-vod.huaweicloud.com/shield/asset/2b8ab25bcb75eaebdae188a1013f90a1/snapshot/sample/2120.jpg', color: 'red'
      }, {
        src: 'https://107.cdn-vod.huaweicloud.com/shield/asset/2b8ab25bcb75eaebdae188a1013f90a1/snapshot/sample/1120.jpg', color: '#ed6d46'
      }, {
        src: 'https://107.cdn-vod.huaweicloud.com/shield/asset/2b8ab25bcb75eaebdae188a1013f90a1/snapshot/sample/120.jpg', color: '#0789ff'
      }, {
        src: 'https://107.cdn-vod.huaweicloud.com/shield/asset/2b8ab25bcb75eaebdae188a1013f90a1/snapshot/sample/20.jpg', color: '#367925'
      }
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

  constructor(private homeService: HomeService) { }

  ngOnInit() {

    this.getDiseaseList();

    this.getLatestNewsList();
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
          img: item.PhotographStore.sUrl,
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

      for (let item of list) {
        // 新闻列表构造
        this.news_module.list.push({
          id: item.id,
          year: item.primeTime.substr(0, 4),
          month: item.primeTime.substr(5, 2),
          day: item.primeTime.substr(8, 2),
          title: item.headline,
          content: item.particulars.substr(0, 50)
        });

        // 新闻列表展示图片构造
        if (!!item.pictrueDetails) {
          for (let source of item.pictrueDetails) {
            if (this.news_module.show.sources.length < 2) {
              this.news_module.show.sources.push({
                src: source.sUrl
              })
            }
          }
        }

      }

    });
  }

}
