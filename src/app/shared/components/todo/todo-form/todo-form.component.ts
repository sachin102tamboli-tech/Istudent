import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/shared/model/todo';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { TodoFunService } from 'src/app/shared/services/todo-fun.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  isInEditMode : boolean = false
  todoStatus : boolean = true
  editObj !: Itodo
  isCompleted : boolean = true
  @ViewChild('toForm') todoForm !: NgForm
  constructor(
    private _fetch : TodoFunService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this._fetch.editTodoSub$.subscribe({
      next : res=>{
        if(res){
          this.isInEditMode = true,
          this.editObj = res
          this.todoForm.form.patchValue(this.editObj)
        }
      }
    })
  }
  onSubmit(){
    if(this.todoForm.valid){
      let newObj = {...this.todoForm.value, id:Date.now()}
      this._fetch.onSubmit(newObj)
      .subscribe({
        next : res => {
          this.todoForm.reset({
            isCompleted : true
          })
          this._snackbar.snackbar(res.msg)
        },
        error : err=> {
          this._snackbar.snackbar(err.msg)
        }
      })
    }
  }
  onUpdt(){
    if(this.todoForm.valid){

      let updtObj = {...this.todoForm.form.value, id : this.editObj.id}
      this._fetch.unUpdate(updtObj)
      .subscribe({
        next : res => {
          this.todoForm.reset({
            isCompleted : true
          })
          this._snackbar.snackbar(res.msg)
        },
        error : err => {
          this._snackbar.snackbar(err.msg)
        }
      })
    }
  }
}
