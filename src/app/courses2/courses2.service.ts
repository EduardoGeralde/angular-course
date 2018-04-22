import { Injectable } from '@angular/core';

@Injectable()
export class Courses2Service {

    courses: string [] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(){
        console.log('Courses2Service');
    }

    getCourses() {
        return this.courses;
    }

    addCourse(course: string){
        this.courses.push(course);
    }
}
