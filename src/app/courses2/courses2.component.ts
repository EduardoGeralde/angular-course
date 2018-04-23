import { CourseDetailsComponent } from './../courses/course-details/course-details.component';
import { Component, OnInit } from '@angular/core';

import {Courses2Service} from './courses2.service';

@Component({
  selector: 'app-courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.css'],
  providers: [Courses2Service]
})
export class Courses2Component implements OnInit {

  courses: string[] = [];
  // courses2Service: Courses2Service;

  constructor(private courses2Service: Courses2Service) {
    // this.courses2Service = _courses2Service;
  }

  ngOnInit() {
    this.courses = this.courses2Service.getCourses();

    Courses2Service.createNewCourse.subscribe(
      course => this.courses.push(course)
    );
  }

}
