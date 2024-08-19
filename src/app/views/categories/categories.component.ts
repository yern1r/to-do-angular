import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';
import { Category } from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{

  @Input()
  categories!: Category[];

  //vybrali category iz spiska
  @Output()
  selectCategory = new EventEmitter<Category>();

  @Input()
  //@ts-ignore
  selectedCategory: Category;

  indexMouseMove:any;
  constructor(
    private dataHandler: DataHandlerService
  ){

  }
  
  //method called automatically after init of component
  ngOnInit() {

    // this.dataHandler.getAllCategories().subscribe((categories => this.categories = categories));

    // this.dataHandler.categoriesSubject.subscribe((categories => this.categories = categories));
    // this.categories = this.dataHandler.getCategories();
    // console.log(this.categories);
  }

  showTaskByCategory(category : Category | null) : void{
    // this.selectedCategory = category;
    // this.dataHandler.fillTasksByCategory(category);

    //esli ne izmenilos; znachenie, nichego ne deleat'(chtoby lishnyi raz ne delat' zaproz dannyx)
    if(this.selectedCategory === category){
      return;
    }

    //soxranyaem vybranuu category
    //@ts-ignore
    this.selectedCategory = category;

    //vyzyvaem vnewniy obrabotchik i peredaem tuda vybrannuu category
    this.selectCategory.emit(this.selectedCategory);
  }

  showEditionIcon(index: number | null){
    this.indexMouseMove = index;
  }

   openEditDialog(category : Category){
    console.log(category.title)
   }

}
