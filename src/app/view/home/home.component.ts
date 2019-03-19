import { Component, OnInit } from '@angular/core';

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
        year: 2018,
        month: 9,
        day: 20,
        title: '测试',
        content: '内容截取'
      }, {
        year: 2018,
        month: 9,
        day: 20,
        title: '测试',
        content: '内容截取'
      }, {
        year: 2018,
        month: 9,
        day: 20,
        title: '测试',
        content: '内容截取'
      }, {
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
        src: '',
        type: ''
      },
      width:'',
      height:''
    }
  }

  // 就医环境模块
  env_module = {
    title: {
      main: '',
      vice: ''
    },
    items: []
  }

  // 疾病科普模块
  disease_module = {
    title: {
      main: '',
      vice: ''
    },
    items: [
      {
        name: '',
        img: '',
        color: ''
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
