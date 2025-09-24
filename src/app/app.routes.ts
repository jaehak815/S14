import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";

export const routes: Routes =[
      {
        path: 'tasks', //<your-domin>/tasks
        component: TasksComponent,
      },
    ]