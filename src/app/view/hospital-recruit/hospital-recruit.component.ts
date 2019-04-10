import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hospital-recruit',
  templateUrl: './hospital-recruit.component.html',
  styleUrls: ['./hospital-recruit.component.css']
})
export class HospitalRecruitComponent implements OnInit {

  title = {
    main: '人才招聘',
    vice: 'RECRUITMENT'
  };

  typeList = [];

  detailList = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {


    this.pageInit();
  }

  pageInit(): void {
    this.homeService.getHospitalRecruitTypeList().subscribe((items) => {
      if (!!items && items.length > 0) {

        items.forEach(item => {
          this.typeList.push({
            id: item.id,
            name: item.typeName,
            selected: false
          });
        });

        this.getDetailList(items[0]);
      }
    });
  }

  /**
   * @description: 获取类型列表
   * @param {type} 
   * @return: 
   */
  getTypeList(): void {
    this.homeService.getHospitalRecruitTypeList().subscribe((items) => {
      items.forEach(item => {
        this.typeList.push({
          id: item.id,
          name: item.typeName,
          selected: false
        });
      });
    });
  }

  /**
   * @description: 刷新右侧详情列表
   * @param {type} 
   * @return: 
   */
  getDetailList(option): void {
    this.homeService.getHospitalRecruitDetailList(option.id).subscribe((items) => {

      this.detailList = items.filter(item => {
        return item.publish === '是';
      }).map(item => { 
        item.typeName = option.typeName
        return item;
      });

    });

    // 选中类型
    this.typeList.forEach((item, index, arr) => {
      if (item.id === option.id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    })
  }

  /**
   * @description: 将招聘详情存进缓存
   * @param {type} 
   * @return: 
   */
  saveContent(content): void {
    sessionStorage && sessionStorage.setItem('recruitDetail', content);
  }

}
