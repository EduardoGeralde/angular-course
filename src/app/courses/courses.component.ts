import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  portalName: string;

  cursos: string[]= ['Java', 'Ext JS', 'Angular'];

  constructor() { 
    this.portalName = 'http://loiane.training';
  }

  ngOnInit() {
  }

}
