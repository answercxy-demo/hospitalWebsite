import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }

  /**
   * @description: 将json对象转化为url查询字符串
   * @param {any} 
   * @return: string
   */
  setUrlStr(json: any): string {
    let str = '?';

    for (let key in json) {
      str += `${key}=${json[key]}&`;
    }

    return str.substr(0, str.length - 1);

  }
}
