import { Observable } from 'rxjs';
import { Priority } from '../../model/Priority';
import { PriorityDAO } from '../Interface/PriorityDAO';
export class PriorityDAOArray implements PriorityDAO {
    
    getAll(): Observable<Priority[]> {
        throw new Error('Method not implemented.');
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