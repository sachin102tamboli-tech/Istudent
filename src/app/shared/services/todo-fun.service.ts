import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IRes, Istudent } from '../model/student';
import { Itodo } from '../model/todo';
import { todoArr } from '../const/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoFunService {
  todoArr : Itodo[]= todoArr
  constructor() { }

  onFetch() : Observable<Itodo[]>{
    return of(this.todoArr)
  }
  editTodoSub$ : Subject<Itodo> = new Subject<Itodo>()

  onSubmit(todo : Itodo): Observable<IRes<Itodo>>{
    this.todoArr.unshift(todo)
    return of({
      msg : `The TODO item ${todo.title} is Added Successfully!!!`,
      obj : todo
    })
  }
  unUpdate(todo : Itodo):Observable<IRes<Itodo>>{
    let getIndex = this.todoArr.findIndex(j => j.id === todo.id)
    this.todoArr[getIndex] = todo
    return of({
      msg : `The TODO item ${todo.title} is Added Successfully!!!`,
      obj : todo
    })
  }

  onRemove(id : number): Observable<IRes<Itodo>>{
    let getIndex = this.todoArr.findIndex(h => h.id === id)
    let removeObj = this.todoArr.splice(getIndex,1)
    return of({
      msg : `The TODO Item ${removeObj[0].title} is Removed Successfully!!!`,
      obj : removeObj[0]
    })
  }
}
