import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

 categories!: Category[];
 selectedCategory!: Category;

  constructor(
    private dataHandler: DataHandlerService
  ){

  }
  
  //method called automatically after init of component
  ngOnInit() {

    this.dataHandler.getAllCategories().subscribe((categories => this.categories = categories));

    // this.dataHandler.categoriesSubject.subscribe((categories => this.categories = categories));
    // this.categories = this.dataHandler.getCategories();
    // console.log(this.categories);
  }

  // showTaskByCategory(category : Category){
  //   this.selectedCategory = category;
  //   this.dataHandler.fillTasksByCategory(category);
  // }

}
