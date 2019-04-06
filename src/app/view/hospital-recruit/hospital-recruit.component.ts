import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { getListeners } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-hospital-recruit',
  templateUrl: './hospital-recruit.component.html',
  styleUrls: ['./hospital-recruit.component.css']
})
export class HospitalRecruitComponent implements OnInit {

  readonly DATA_NUMBER = 32;
  readonly TYPE_ARR = [
    {
      id: 'a',
      name: '主治医生类型'
    }, {
      id: 'b',
      name: '护士类型'
    }, {
      id: 'c',
      name: '清洁人员类型'
    }, {
      id: 'd',
      name: '主任类型类型'
    },

  ];

  title = {
    main: '人才招聘',
    vice: 'RECRUITMENT'
  };

  ClassifiedData = {};

  typeList = [];

  detailList = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {

    this.getList();

  }

  /**
   * @description: 
   * @param {type} 
   * @return: 
   */
  getList(): void {
    let data = [];

    for (let i = 0; i < this.DATA_NUMBER; i++) {
      data.push({
        id: i,
        typeId: this.TYPE_ARR[Math.floor(i / 8)].id,
        typeName: this.TYPE_ARR[Math.floor(i / 8)].name,
        title: `${this.TYPE_ARR[Math.floor(i / 8)].name}，总第${i}条`
      });
    }

    data.forEach((item, index, data) => {

      let flag = this.typeList.some((type) => {
        return type.id === item.typeId
      });

      if (!!flag) {
        this.ClassifiedData[item.typeId].push(item);
      } else {
        this.typeList.push({
          id: item.typeId,
          name: item.typeName,
          selected: false
        });
        this.ClassifiedData[item.typeId] = [item];
      }

    });

    this.getDetailList(this.typeList[0].id);

  }

  /**
   * @description: 
   * @param {type} 
   * @return: 
   */
  getDetailList(typeId): void {
    this.detailList = this.ClassifiedData[typeId];
    
    this.typeList.forEach((item, index, arr)=>{
      if(item.id === typeId){
        item.selected = true;
      }else {
        item.selected = false;
      }
    })
  }

}
