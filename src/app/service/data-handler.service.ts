import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new Subject<Task[]>();
  constructor() { }

  getCategories(): Category[]{
    return TestData.categories;
  }

  fillTasks(){
    //we give a signal when we get new value into subject
    //then with next() we can give signal for observers 
    this.taskSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category : Category) { 
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }
}
 