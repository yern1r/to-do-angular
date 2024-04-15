// CRUD
// interface - show only just the behaviour 
import { Observable } from "rxjs";

//all ,ethods rerturn Observable - fro async and for working in reactive style
export interface CommonDAO<T>{

    getAll() : Observable<T[]>;

    get(id : number) : Observable <T>;

    delete(id : number) : Observable<T>;

    update(obj: T) : Observable<T>;

    add(obj: T) : Observable<T>;

}