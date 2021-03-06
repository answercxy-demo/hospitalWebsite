import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css']
})
export class DepartmentInfoComponent implements OnInit {

  title = {
    main: '科室信息',
    vice: 'DEPARTMENT'
  }

  items = [];

  bannersData = {
    apiName: 'departmentInfo'
  };

  constructor(private homeService: HomeService) { }

  ngOnInit() {

    this.getDepartmentList();

  }

  /**
   * 获取部门列表信息
   */
  getDepartmentList(): void {
    this.homeService.getDepartmentList().subscribe((items) => {
      
      // 构造科室信息列表数据
      for (let item of items) {
        this.items.push({
          id: item.id,
          name: item.sName
        });
      }

    });
  }

}
