import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { todoArr } from 'src/app/shared/const/todo';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoFunService } from 'src/app/shared/services/todo-fun.service';
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {
  todoArr : Itodo[] = todoArr
  constructor(
    private _obj : TodoFunService,
    private _matDialog : MatDialog,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.onFetch()
  }

  onFetch(){
    this._obj.onFetch()
    .subscribe({
      next : res => {
        this.todoArr = res
      },
      error : err=>{
        console.log(err)
      }
      
    })
  }

  onEdit(tod : Itodo){
    this._obj.editTodoSub$.next(tod)
  }

  onRemove(id : number){
    let config = new MatDialogConfig()
    config.width = "400px"
    config.maxWidth = "500px"
    let _matDialogRefe = this._matDialog.open(GetConfirmComponent)
    _matDialogRefe.afterClosed().subscribe(flag => {
      if(flag){
        this._obj.onRemove(id).subscribe({
          next : res => {
            this._snackbar.snackbar(res.msg)
          },
          error : err => {
            this._snackbar.snackbar(err.msg)
          }
        })
      }
    }) 
  }

}
