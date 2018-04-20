import { Component, OnInit } from '@angular/core';

import { Courses2Service } from './../courses2/courses2.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  courses: string[] = [];

  constructor(private courses2Service: Courses2Service) { }

  ngOnInit() {
    this.courses = this.courses2Service.getCourses();
  }

}
