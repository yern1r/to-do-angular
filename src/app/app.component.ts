import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from './service/data-handler.service';
import { Task } from './model/Task';
import { Category } from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'to-do-app';
  tasks!: Task[];
  categories!: Category[];

  private selectedCategory!: Category ;

  constructor(
    private dataHandler: DataHandlerService, //фасад для рабоы с данными
  ){

  }
  ngOnInit(): void {
    // this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);

    this.dataHandler.getAllCategories().subscribe((categories => this.categories = categories));
    this.onSelectCategory(null);//show all tasks

  }

  //change categories
  public onSelectCategory(category : Category){
    this.selectedCategory = category;

    this.dataHandler.searchTasks(
      this.selectedCategory,
      null,
      null,
      null
    ).subscribe((tasks)=>{
      this.tasks = tasks;
    })
  }

}
