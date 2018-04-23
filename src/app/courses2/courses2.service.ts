import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from './../shared/log.service';

@Injectable()
export class Courses2Service {

    static createNewCourse = new EventEmitter <string>();

    sendCreatedCourse = new EventEmitter <string>();

    courses: string [] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private logService: LogService) {
        console.log('Courses2Service');
    }

    getCourses() {
        this.logService.consoleLog('Getting list of courses');
        return this.courses;
    }

    addCourse(course: string) {
        this.logService.consoleLog(`Creating a new course: ${course}`);
        this.courses.push(course);
        this.sendCreatedCourse.emit(course);
        Courses2Service.createNewCourse.emit(course);
    }
}
