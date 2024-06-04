import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataHandlerService } from '../../service/data-handler.service';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css'
})
export class EditTaskDialogComponent implements OnInit{

  constructor(
    private dialogRef : MatDialogRef<EditTaskDialogComponent>,//
    @Inject(MAT_DIALOG_DATA) private data : [Task, string],
    private dataHandler : DataHandlerService,
    private dialog : MatDialog,
  ){

  }
  
   tmpTitle!: string;
   dialogTitle!: string;
   task!: Task;

  ngOnInit(): void {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
    
    console.log("this.task", this.task)
    console.log("this.dialogTitle", this.dialogTitle)
    console.log("this.task.title", this.task.title)

  }

  onConfirm(): void {
    this.task.title = this.tmpTitle ;

    this.dialogRef.close(this.task);
  }

  onCancel() : void {
    this.dialogRef.close(null);
  }

}
