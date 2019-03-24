import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 18; i++) {
      this.items.push({
        id: i,
        name: `科室${i}`
      });
    }
  }

}
