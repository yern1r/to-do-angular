import { Observable, of } from 'rxjs';
import { Priority } from '../../model/Priority';
import { PriorityDAO } from '../Interface/PriorityDAO';
import { TestData } from '../TestData';
export class PriorityDAOArray implements PriorityDAO {
    
    getAll(): Observable<Priority[]> {
       return of (TestData.priorities);
    }
    get(id: number): Observable<Priority> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Observable<Priority> {
        throw new Error('Method not implemented.');
    }
    update(obj: Priority): Observable<Priority> {
        throw new Error('Method not implemented.');
    }
    add(obj: Priority): Observable<Priority> {
        throw new Error('Method not implemented.');
    }

}