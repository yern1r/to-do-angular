import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TaskDAOArray } from '../data/Impl/TaskDAOArray';
import { CategoryDAOArray } from '../data/Impl/CategoryDAOArray';
import { Priority } from '../model/Priority';
import { PriorityDAOArray } from '../data/Impl/PriorityDAOArray';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  // taskSubject = new Subject<Task[]>();
  // taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  // categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
  private TaskDaoArray = new TaskDAOArray;
  private CategoryDaoArray = new CategoryDAOArray;
  private priorityDaoArray = new PriorityDAOArray;

  constructor() { }

  getAllTasks(): Observable<Task[]>{
    return this.TaskDaoArray.getAll();
  }

  getAllCategories(): Observable<Category[]>{
    return this.CategoryDaoArray.getAll();
  }

  getAllPriorities(): Observable<Priority[]>{
    return this.priorityDaoArray.getAll();
  }

  // searching tasks by params
  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>{
    return this.TaskDaoArray.search(category,searchText,status,priority);
  }
  // searchTasks(category: Category): Observable<Task[]>{
  //   return this.TaskDaoArray.search(category );
  // }

  updateTask(task:Task): Observable<Task>{
    return this.TaskDaoArray.update(task);
  }

  // getCategories(): Category[]{
  //   return TestData.categories;
  // }

  // fillTasks(){
  //   //we give a signal when we get new value into subject
  //   //then with next() we can give signal for observers 
  //   this.taskSubject.next(TestData.tasks);
  // }

  // fillTasksByCategory(category : Category) { 
  //   const tasks = TestData.tasks.filter(task => task.category === category);
  //   this.taskSubject.next(tasks);
  // }

  
}
