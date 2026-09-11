import { Component, OnInit } from '@angular/core';
import { studentArr } from '../../const/student';
import { Istudent } from '../../model/student';
import { FunctionService } from '../../services/function.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from '../../services/snackbar.service';


@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  studentArr !: Istudent[]
  constructor(
    private _fetch : FunctionService,
    private _matDialog : MatDialog,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.fetch()
  }

  trackStd(index : number, stud : Istudent){
    return stud.id
  }
  fetch(){
    this._fetch.fetchData()
    .subscribe({
      next : res => {
        this.studentArr = res.obj
      } 
    })

  }
  onEdit(stud : Istudent){
    this._fetch.editStudSub$.next(stud)
  }

  onRemove(id : number){
    let config = new MatDialogConfig()
    config.width = "500px";
    config.maxWidth = "700px"
    let _matDialogRef = this._matDialog.open(GetConfirmComponent)
    _matDialogRef.afterClosed().subscribe(flag =>{
      if(flag){
        this._fetch.onRemove(id).subscribe({
          next : res =>{
            this._snackbar.snackbar(res.msg)
          },
          error : err =>{
            this._snackbar.snackbar(err.msg)
          }
        })
      }
    } )
    
  }
}
