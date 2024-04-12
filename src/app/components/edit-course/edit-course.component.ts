import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {CourseModel} from "../../models/course.model";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent implements OnInit{
  course?:CourseModel;

  constructor(private router: Router, private courseService:CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCourse(this.route.snapshot.params['id']);
    console.log("Course id = " + this.course?.id);
    console.log("Course name = " + this.course?.courseName);
  }

  getCourse(id:any) {
    this.courseService.getCourseById(id)
      .subscribe({
        next:(data)=>{
          this.course = data;
          console.log(data);
        },
        error:(e)=>console.error(e)});
  }

  updateCourse() {
    if (this.course?.id) {
      this.courseService.updateCourse(this.course, this.course?.id).subscribe(
        (data) => {
          console.log(data);
        }
      );
      console.log("Update course " + this.course?.courseName + " id = " + this.course?.id);
    }
    this.router.navigate(['/courses']);
  }
}
