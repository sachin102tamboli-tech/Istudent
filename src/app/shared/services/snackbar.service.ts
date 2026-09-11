import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbarService : MatSnackBar) { }

  snackbar(msg : string){
    this._snackbarService.open(msg, 'close', {
      duration : 3000,
      horizontalPosition : 'center',
      verticalPosition : 'top'
    })
  }
}
