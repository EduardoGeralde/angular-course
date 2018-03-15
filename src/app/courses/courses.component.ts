import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  portalName: string;

  courses: string[];

  constructor(private coursesService: CoursesService) { 
    this.portalName = 'http://loiane.training';

    this.courses = coursesService.getCourses();
  }

  ngOnInit() {
  }

}
