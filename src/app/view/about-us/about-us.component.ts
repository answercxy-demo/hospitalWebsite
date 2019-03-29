import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutUs = {
    img: [
      `https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/2${Math.floor(Math.random() * 50)}0.jpg`,
      `https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/2${Math.floor(Math.random() * 50)}0.jpg`
    ],
    text: {
      title: {
        main: '医院简介',
        vice: 'About us'
      },
      content: '兴义人安精神病医院是经黔西南州卫生和计划生育委员会批准设立的二级精神病专科医院。位于兴义市马岭镇龙井村（兴马大道旁），占地面积7.8亩，建筑总面积9000余平方米，室外活动场地2000余平方米，能容纳住院患者400余人。医院设有精神科门诊、睡眠障碍科、心理咨询室、预防保健科、抢救室、常规化验室、心理测验室、DR室、B超室、心电图室、脑电图室、工娱治疗室、音乐治疗室、多功能康复活动室等；人员配置齐全，现有员工90余人，是黔西南州城镇职工、城乡居民基本医疗保险服务协议医疗机构，是全州各市、县、义龙新区医疗救助“一站式”即时结算定点医院；于2017年7月经黔西南州残疾人联合会批准正式挂牌成为黔西南州精神病精准康复服务定点机构。本院一直重视精神疾病临床研究与诊疗的紧密结合，不断完善精神疾病诊疗体系，提高诊疗水平，并以雄厚的技术力量、优质的诊疗服务，对精神分裂症、双相情感性障碍（双相障碍）、偏执型精神障碍、癫痫所致精神障碍、分裂情感性精神障碍、精神发育迟滞等重性精神疾病进行专业的诊断及治疗；目前，已筹备开展睡眠障碍、心身疾病、神经症、心理障碍以及人格障碍等精神疾病的治疗、研究工作。自2015年正式投入运营以来，我院致力于打造管理规范有序、服务质量优良的一流精神病专科医院，得到了国家、省、州、市等各级相关部门及领导的高度评价和认可。我们始终秉承“以人为本”的宗旨，坚持“尊重患者、关爱患者、用心服务”的理念，奉行医疗质量与服务质量并重的方针，一切以病人的治疗和康复为中心。医院规模大、档次高、环境好、设施齐全、医资实力雄厚、服务一流，让患者舒心，让家属放心，让政府省心，是精神疾病患者的最佳选择。'
    }
  };

  experts = {
    title: {
      main: '专家介绍',
      vice: 'Experts'
    },
    expertList: [

    ]
  }

  constructor() { }

  ngOnInit() {

    this.getExpertList();

  }

  getExpertList(): void {
    for (let index = 0; index < 4; index++) {
      this.experts.expertList.push({
        name: `专家${index}`,
        img: `https://651.cdn-vod.huaweicloud.com/shield/asset/203f36f3fb707deef9d5a77f27abb873/snapshot/sample/2${Math.floor(Math.random() * 50)}0.jpg`,
        describe: `该专家199${index}年毕业于广东中医药大学临床医学系，工作经验已达${index}年，经验丰富，实力雄厚，很强`
      })
    }
  }

}
