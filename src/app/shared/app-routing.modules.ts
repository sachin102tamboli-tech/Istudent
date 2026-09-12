import { RouterModule, Routes } from "@angular/router";
import { StudentDashComponent } from "./components/student-dash/student-dash.component";
import { NgModule } from "@angular/core";
import { TodoDashComponent } from "./components/todo/todo-dash/todo-dash.component";


const routes : Routes =[
    {
        path: '',
        component : TodoDashComponent,
        pathMatch : 'full'
    },
    {
        path: 'todo',
        component : TodoDashComponent
    },
    {
        path : 'student',
        component : StudentDashComponent
    }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
    
}