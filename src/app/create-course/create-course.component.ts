import { Component, OnInit } from '@angular/core';

import { Courses2Service } from './../courses2/courses2.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [Courses2Service]
})
export class CreateCourseComponent implements OnInit {

  courses: string[] = [];

  constructor(private courses2Service: Courses2Service) { }

  ngOnInit() {
    this.courses = this.courses2Service.getCourses();
  }

  onAddCourse(course: string){
    this.courses2Service.addCourse(course);
  }

}
