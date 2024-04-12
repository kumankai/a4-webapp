import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {CourseService} from "../../services/course.service";
import {CourseModel} from "../../models/course.model";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [RouterLink, NgForOf, RouterLinkActive],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit{
  courseList?:CourseModel[];

  constructor(private courseService:CourseService) {
  }

  ngOnInit(): void {
    this.getCourseList();
  }

  getCourseList(){
    this.courseService.getAllCourses()
      .subscribe({
        next:(data)=>{
          this.courseList = data;
          console.log(data);
        },
        error:(e)=>console.error(e)
      });
  }
}
