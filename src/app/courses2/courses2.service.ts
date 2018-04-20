import { Injectable } from '@angular/core';

@Injectable()
export class Courses2Service {

    getCourses() {
        return ['Angular 2', 'Java', 'Phonegap'];
    }
}
