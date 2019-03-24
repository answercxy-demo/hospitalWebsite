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
    list: [
      {
        id: '1',
        year: 2018,
        month: 9,
        day: 20,
        title: '测试',
        content: '内容截取'
      }, {
        id: '2',
        year: 2018,
        month: 9,
        day: 20,
        title: '测试',
        content: '内容截取超级长超级长超级长超级长超级长超级长超级长超级长'
      }, {
        id: '3',
        year: 2018,
        month: 9,
        day: 20,
        title: '测试',
        content: '内容截取'
      }, {
        id: '4',
        year: 2018,
        month: 9,
        day: 20,
        title: '测试',
        content: '内容截取'
      }
    ],
    show: {
      sources: [
        {
          src: ''
        }, {
          src: ''
        }
      ]
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
        src: ''
      }, {
        src: ''
      }, {
        src: ''
      }, {
        src: ''
      }
    ]
  }

  // 疾病科普模块
  disease_module = {
    title: {
      main: '疾病科普',
      vice: 'DISEASE SCIENCE'
    },
    items: [
      {
        id: '999',
        name: '',
        img: '',
        color: '',
      }
    ]
  }

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.disease_module.items.push({
        id: String(i),
        name: '疾病' + i,
        img: 'b' + i,
        color: '#' + String(i) + String(i) + String(i)
      });
    }

    this.getTest();
  }

  getTest(): void{
    this.homeService.getTest().subscribe((test)=>{
      console.log(test);
    })
  }

}
