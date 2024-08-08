import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDialogComponent {

  dialogTitle: string;
  message: string;

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { dialogTitle: string, message: string}
  ){
    this.dialogTitle = data.dialogTitle;
    this.message = data.message;
  }

  ngOnInit(){

  }

  onConfirm():void{
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
