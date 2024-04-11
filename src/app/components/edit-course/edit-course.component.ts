import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {CourseModel} from "../../models/course.model";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent implements OnInit{
  course?:CourseModel;

  constructor(private courseService:CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCourse(this.route.snapshot.params['id']);
    console.log("Student id = " + this.course?.id);
    console.log("Student name = " + this.course?.coursename);
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
      console.log("Update course " + this.course?.coursename + " id = " + this.course?.id);
    }
  }
}
