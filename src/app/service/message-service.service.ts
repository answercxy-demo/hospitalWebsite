import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  
  selectedClass = 'info';

  message: string = '';

  timeoutFlag: any = '';

  add(message: string, type: string) {
    if (!!this.timeoutFlag) {
      clearTimeout(this.timeoutFlag);
    }
    this.message = message;
    this.selectedClass = type;
    this.timeoutFlag = setTimeout(() => {
      this.clear();
    }, 5000);
  }

  clear() {
    this.message = '';
  }
}