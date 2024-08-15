import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { TasksComponent } from './views/tasks/tasks/tasks.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'
import { EditTaskDialogComponent } from './dialog/edit-task-dialog/edit-task-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import { TaskDatePipe } from './pipe/task-date.pipe';
import { registerLocaleData } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';


import localeRu from '@angular/common/locales/ru'
registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TasksComponent,
    EditTaskDialogComponent,
    ConfirmDialogComponent,
    TaskDatePipe
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCalendar,
    MatCheckboxModule
  ],
  providers: [],
  //@ts-ignore
  entryComponents: [
    EditTaskDialogComponent,
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
