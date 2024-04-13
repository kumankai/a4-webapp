import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseModel} from "../models/course.model";

const baseUrl = 'http://localhost:8080/api/courses';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<CourseModel[]> {
    return this.http.get<CourseModel[]>(baseUrl);
  }

  getCourseById(id:number): Observable<CourseModel> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createCourse(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateCourse(data: any, id:number): Observable<any> {

    return this.http.put(`${baseUrl}/${id}`,data);
  }

  deleteCourse(id:number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
