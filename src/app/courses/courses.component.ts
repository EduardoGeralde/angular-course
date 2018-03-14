import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  portalName: string;

  courses: string[];

  constructor() { 
    this.portalName = 'http://loiane.training';
  }

  ngOnInit() {
  }

}
