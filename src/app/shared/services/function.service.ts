import { Injectable } from '@angular/core';
import { studentArr } from '../const/student';
import { Istudent, IRes } from '../model/student';
import { Observable, of, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  studentArr : Istudent[] = studentArr
  constructor() { }

  fetchData(): Observable<IRes<Istudent[]>>{
    return of({
      msg : 'Data Received',
      obj : this.studentArr
    })
  }

  editStudSub$ : Subject<Istudent> = new Subject<Istudent>()

  onSubmit(student : Istudent): Observable<IRes<Istudent[]>>{
    this.studentArr.unshift(student)
    return of({
      msg : `The Student ${student.name} is Added Succesfully`,
      obj : this.studentArr
    })
  }
  onUpdate(student : Istudent):Observable<IRes<Istudent[]>>{
    let getIndex = this.studentArr.findIndex(k => k.id === student.id)
    this.studentArr[getIndex] = student
    return of({
      msg : `The Student ${student.name} is Modified Successfully!!`,
      obj : this.studentArr
    })
  }

  onRemove(id : number):Observable<IRes<Istudent>>{
    let getIndex = this.studentArr.findIndex(k => k.id === id)
    let removeObj = this.studentArr.splice(getIndex, 1)
    return of({
      msg : `The Studen ${removeObj[0].id} is Removed Successfully!!!`,
      obj : removeObj[0]
    })
  }
}
