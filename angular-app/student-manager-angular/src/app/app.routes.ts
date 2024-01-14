import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';

export const routes: Routes = [
    {path:"students", component: StudentListComponent},
    {path:"add-student", component:AddStudentComponent}
];
