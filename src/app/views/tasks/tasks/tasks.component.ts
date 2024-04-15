import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { DataHandlerService } from '../../../service/data-handler.service';
import { Task } from '../../../model/Task';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoriesComponent } from '../../categories/categories.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit , AfterViewInit{
  tasks! : Task[];

  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'] // fields for table
  dataSource!: MatTableDataSource<Task>;//container - data source for table
  @ViewChild(MatPaginator, {static: false}) private paginator!: MatPaginator;
  @ViewChild(MatSort,{static: false}) private sort!: MatSort;


  constructor(
    private dataHandler : DataHandlerService
  ){

  }

  ngOnInit(): void {

    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks)

    // this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
    // console.log(this.tasks)

    this.dataSource = new MatTableDataSource();
    
    this.refreshTable();
  }

  ngAfterViewInit(){
    this.addTableObjects();
  } 
  //show tasks with application of all current conditions 
  private refreshTable(){

    this.dataSource.data = this.tasks; //update data source 
    
    this.addTableObjects();

    //@ts-ignore
    this.dataSource.sortingDataAccessor = (task, colName) =>{
      switch(colName){
        case 'priority' : {
          return task.priority ? task.priority.id : null;
        }
        case 'category' : {
          return task.category ? task.category.title : null;
        }
        case 'date' : {
          return task.date ? task.date : null;
        }
        case 'title' : {
          return task.title;
        }
      }
    }
  }

   getPriorityColor(task : Task) {
      if(task.completed){
        return '#F8F9FA';
      }

      if(task.priority && task.priority.color){
        return task.priority.color;
      }

      return '#fff';
  }

  toggleTaskCompleted(task: Task) {
      task.completed = !task.completed;
  }
  
  private addTableObjects(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


}
