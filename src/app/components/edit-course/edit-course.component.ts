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
  updateCourse() {
    if (this.course?.id) {
    }
  }
}
