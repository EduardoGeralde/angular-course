import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Courses2Service {

    static createNewCourse = new EventEmitter <string>();

    sendCreatedCourse = new EventEmitter <string>();

    courses: string [] = ['Angular 2', 'Java', 'Phonegap'];

    constructor() {
        console.log('Courses2Service');
    }

    getCourses() {
        return this.courses;
    }

    addCourse(course: string) {
        this.courses.push(course);
        this.sendCreatedCourse.emit(course);
        Courses2Service.createNewCourse.emit(course);
    }
}
