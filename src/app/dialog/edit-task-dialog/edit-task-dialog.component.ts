import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataHandlerService } from '../../service/data-handler.service';
import { Task } from '../../model/Task';
import { Category } from '../../model/Category';
import { Priority } from '../../model/Priority';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css'
})
export class EditTaskDialogComponent implements OnInit{

  constructor(
    private dialogRef : MatDialogRef<EditTaskDialogComponent>,// for opportunity work with current dialog modal
    @Inject(MAT_DIALOG_DATA) private data : [Task, string], // data which sent into dialog modal
    private dataHandler : DataHandlerService,// link to the service for work with data
    private dialog : MatDialog, // for open the new dialog modal (from current modal) - ex: for confirmation of deleting
  ){

  }
     categories!: Category[];
     priorities!: Priority[];

     tmpCategory!: Category | undefined;
    tmpPriority!: Priority | undefined;

   tmpTitle!: string;
   dialogTitle!: string; // title of modal
   task!: Task; // task for edit/create

  ngOnInit(): void {
    this.task = this.data[0]; // task for edit/create
    this.dialogTitle = this.data[1]; // text for dialog modal
    this.tmpTitle = this.task.title;
    
    console.log("this.task", this.task)
    console.log("this.dialogTitle", this.dialogTitle)
    console.log("this.task.title", this.task.title)

    // инициализация начальных знанений (записывали в отдельные переменные
    //чтобы можно было отменить изменения, а то будут сразу записываться в задачу)
    this.tmpCategory = this.task.category;
    this.tmpPriority = this.task.priority;
    console.log("this.task.category", this.task.category)

    this.dataHandler.getAllCategories().subscribe(items => 
      this.categories = items)
      this.dataHandler.getAllPriorities().subscribe(items => 
        this.priorities = items)
    console.log(this.categories)
    console.log(this.priorities)
  }

  //нажали ОК
  onConfirm(): void {
    // считываем все значения для сохранения в поля задачи
    this.task.title = this.tmpTitle ;
    this.task.category = this.tmpCategory;
    this.task.priority = this.tmpPriority;

    //передаем добаволенную/измененную задачу в обработчик
    //что с ним будут делать - уже на задача этого компонента
    this.dialogRef.close(this.task);
  }

  onCancel() : void {
    this.dialogRef.close(null);
  }

}
