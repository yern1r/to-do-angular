import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../../service/data-handler.service';
import { Task } from '../../../model/Task';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  tasks! : Task[];

   displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'] // fields for table
   dataSource!: MatTableDataSource<Task>;//container - data source for table

  constructor(
    private dataHandler : DataHandlerService
  ){

  }

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
    console.log(this.tasks)

    this.dataSource = new MatTableDataSource();
    
    this.refreshTable();
  }

  //show tasks with application of all current conditions 
  private refreshTable(){

    this.dataSource.data = this.tasks; //update data source 
  
  }

   getPriorityColor(task : Task) {

      if(task.priority && task.priority.color){
        return task.priority.color;
      }

      return '#fff';
  }

  toggleTaskCompleted(task: Task) {
      task.completed = !task.completed;
  }
  
  
}
