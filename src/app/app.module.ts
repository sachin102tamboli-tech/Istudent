import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashComponent } from './shared/components/student-dash/student-dash.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentCardComponent } from './shared/components/student-card/student-card.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { TodoDashComponent } from './shared/components/todo/todo-dash/todo-dash.component';
import { TodoFormComponent } from './shared/components/todo/todo-form/todo-form.component';
import { TodoTableComponent } from './shared/components/todo/todo-table/todo-table.component';
import { NavabrComponent } from './shared/components/navabr/navabr.component';
import { AppRoutingModule } from './shared/app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashComponent,
    StudentFormComponent,
    StudentCardComponent,
    GetConfirmComponent,
    TodoDashComponent,
    TodoFormComponent,
    TodoTableComponent,
    NavabrComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
