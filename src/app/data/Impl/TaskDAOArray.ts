import { Observable, of } from "rxjs";
import { Category } from "../../model/Category";
import { Priority } from '../../model/Priority';
import { Task } from "../../model/Task";
import { TaskDAO } from "../Interface/TaskDAO";
import { TestData } from "../TestData";

export class TaskDAOArray implements TaskDAO{
    get(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }

    search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
       return of(this.searchTasks(category, searchText, status, priority))
    }
    getCompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getUncompletedCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCountInCategory(category: Category): Observable<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCount(): Observable<number> {
        throw new Error("Method not implemented.");
    }

    //---------------------------------------------//

    getAll(): Observable<Task[]> {
       return of (TestData.tasks);
    }

    private searchTasks(category: Category, searchText: string, status:boolean, priority: Priority): Task[]{
        let allTasks = TestData.tasks;

        if (category != null){
            allTasks = allTasks.filter(todo => todo.category === category)
        }

        return allTasks; //filtered array
    }

    //---------------------------------------------//

    // get(id: number): Observable<Task> {
    //     return of (TestData.tasks.find(todo => todo.id === id));
    // }
    delete(id: number): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    update(obj: Task): Observable<Task> {
        throw new Error("Method not implemented.");
    }
    add(obj: Task): Observable<Task> {
        throw new Error("Method not implemented.");
    }


}