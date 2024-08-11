import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDate'
})
export class TaskDatePipe implements PipeTransform {

  transform(date: Date | string, format : string = 'mediumDate'): string {

    if(date === null || date === undefined){
      return 'Without deadline'
    }

    date = new Date(date);
    const currentDate = new Date().getDate();

    if(date.getDate() === currentDate){
      return 'Today';
    }
    if(date.getDate() === currentDate - 1 ){
      return 'Yesterday';
    }
    if(date.getDate() === currentDate + 1){
      return 'Tomorrow';
    }

    return new DatePipe('ru-RU').transform(date, format) || '';
    
  }

}
