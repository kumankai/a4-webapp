import { Component, OnInit } from '@angular/core';
import {CourseModel} from "../../models/course.model";
import {CourseService} from "../../services/course.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {
  course: CourseModel = {};

  constructor(private router: Router, private courseService:CourseService) {
  }

  ngOnInit(): void {
  }

  addCourse() {
    this.courseService.createCourse(this.course).subscribe(
      (data) => {
        console.log(data);
      }
    );
    console.log("Update Student " + this.course?.courseName + " id = " + this.course?.id);

  }
}
