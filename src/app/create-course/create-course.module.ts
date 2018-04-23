import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateCourseComponent } from './create-course.component';
import {Courses2Service} from '../courses2/courses2.service';
import { CreatedCourseReceiverComponent } from '../created-course-receiver/created-course-receiver.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    CreatedCourseReceiverComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCourseComponent
  ]// ,
   // providers: [
   //  Courses2Service
   // ]
})
export class CreateCourseModule { }
