import { Routes } from '@angular/router';
import {CourseListComponent} from "./components/course-list/course-list.component";
import {AddCourseComponent} from "./components/add-course/add-course.component";
import {EditCourseComponent} from "./components/edit-course/edit-course.component";

export const routes: Routes = [
  { path: 'students', component: CourseListComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'editcourse/:id/edit', component: EditCourseComponent }
];
