import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild, viewChild, ViewEncapsulation } from '@angular/core';
import { DataHandlerService } from '../../../service/data-handler.service';
import { Task } from '../../../model/Task';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EditTaskDialogComponent } from '../../../dialog/edit-task-dialog/edit-task-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {

  //текущие задачи для отображения на странице
  // @Input()
  public tasks! : Task[]; // напрямую не присвалием значение в переменую, только через @Input

  //поля для таблицы (те, что отображает данные из задачи - должны совпадать с названиями переменных классов)
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category', 'operations', 'select'] // fields for table
  dataSource!: MatTableDataSource<Task>;//container - data source for table

  // ссыльки на компоненты таблицы
  @ViewChild(MatPaginator, {static: false}) private paginator!: MatPaginator;
  @ViewChild(MatSort,{static: false}) private sort!: MatSort;

  //текущие задачи для отображения на странице
  @Input('tasks')
  public set setTasks(tasks: Task[]){//напрямую не присваиваем значения в переменую, только в переменную только через @Input
    this.tasks = tasks;
    this.fillTable();
  }

  @Output()
  deleteTask = new EventEmitter<Task>();

  @Output()
  updateTask = new EventEmitter<Task>();

  constructor(
    private dataHandler : DataHandlerService,
    private dialog : MatDialog
  ){

  }

  ngOnInit(): void {

    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks)

    // this.dataHandler.taskSubject.subscribe(tasks => this.tasks = tasks);
    // console.log(this.tasks)

    // датасорс обьязательно нужно создавать для таблицыв него присваивается любой источник(Бд , массив)
    this.dataSource = new MatTableDataSource();
    this.fillTable();//заполняем таблицы данными(задачи) и все метаданными
  }

  // ngAfterViewInit(){
  //   this.addTableObjects();
  // } 

  //show tasks with application of all current conditions 
  private fillTable() : void {

    //check for = null
    if(!this.dataSource){
      return;
    }

    this.dataSource.data = this.tasks; //update data source 
    
    this.addTableObjects();

    //когда получаем данные 
    //чтобы можно было сортировать по столбцам категории и приоритет так как не примитивные типы,
    //@ts-ignore - показывает ошибку для типа даты, но так рабоает так ка можно возвращать любой тип
    this.dataSource.sortingDataAccessor = (task, colName) =>{

      // по каким полям сортировку для каждого столбца
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

   getPriorityColor(task : Task) : string{
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
    this.dataSource.sort = this.sort; // компонент для сортировки данных(если необходимо)
    this.dataSource.paginator = this.paginator; // обновить компонент постраничности (кол-во записей,)
  }

  // dialog of editting for adding tasks
  openEditTaskDialog(task : Task): void {

    //open dialog
    const dialogRef = this.dialog.open(EditTaskDialogComponent, 
      {
        data: [task, 'Editting the task'], 
        autoFocus: false
      }); 

    
    dialogRef.afterClosed().subscribe( result => {
      //dealing with results
      if(result === 'complete'){
        task.completed = true;
        this.updateTask.emit(task);
      }

      if(result === 'activate'){
        task.completed = false;
        this.updateTask.emit(task);
      }

      if(result === 'delete'){
        this.deleteTask.emit(task);
        return
      }

      if (result as Task){
        this.updateTask.emit(task);
        return;
      }
    })

    // this.updateTask.emit(task);
  }

  openDeleteDialog(task : Task){
    const dialogRef  = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {dialogTitle: 'Confirm action', message: `Are you sure to delet this "${task.title}"?`},
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result =>{
      if(result) {
        this.deleteTask.emit(task);
      }
    });
  }

  onToggleStatus(task :Task){
    task.completed = !task.completed;
    this.updateTask.emit(task);
  }

}
