import { Component, OnInit } from '@angular/core';

import { Courses2Service } from './../courses2/courses2.service';

@Component({
  selector: 'app-created-course-receiver',
  templateUrl: './created-course-receiver.component.html',
  styleUrls: ['./created-course-receiver.component.css']
})
export class CreatedCourseReceiverComponent implements OnInit {

  course: string;

  constructor(private course2Service: Courses2Service) { }

  ngOnInit() {
    this.course2Service.sendCreatedCourse.subscribe(
      createdCourse => this.course = createdCourse
    );
  }

}
