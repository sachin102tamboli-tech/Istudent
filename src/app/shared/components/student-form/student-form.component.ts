import { Component, OnInit, ViewChild } from '@angular/core';
import { FunctionService } from '../../services/function.service';
import { Istudent } from '../../model/student';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  isInEditMode : boolean = false
  editOj !: Istudent
  gender : string = 'Male'
  @ViewChild('stdForm') stdForm !: NgForm
  constructor(private _fetch : FunctionService,
    private _snackbar : SnackbarService
  ) { }

  ngOnInit(): void {
    this._fetch.editStudSub$.subscribe({
      next : res =>{
        if(res){
          this.isInEditMode =true
          this.editOj= res
          this.stdForm.form.patchValue(this.editOj)
        }
      }
    })
  }

  onSubmit(){
    if(this.stdForm.valid){
      let newObj = {
        ...this.stdForm.form.value,
        id : Date.now()
      }
      this._fetch.onSubmit(newObj)
      .subscribe({
        next : res => {
          this.stdForm.reset({
            gender : 'Male'
          })
          this._snackbar.snackbar(res.msg)
        },
        error : err =>{
          this._snackbar.snackbar(err.msg)
        }
      })
    }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let updtObj = {...this.stdForm.form.value,
        id : this.editOj.id
      }
      this._fetch.onUpdate(updtObj)
      .subscribe({
        next : res => {
          this.stdForm.reset({
            gender : 'Male'
          })
          this.isInEditMode = false
          this._snackbar.snackbar(res.msg)
        },
        error : err => {
          this._snackbar.snackbar(err.msg)
        }
      })
    }
  }

}
