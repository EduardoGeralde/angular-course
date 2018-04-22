import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Courses2Component } from './courses2.component';
import {Courses2Service} from '../courses2/courses2.service';

@NgModule({
  declarations: [
    Courses2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Courses2Component
  ]//,
  //providers: [
  //  Courses2Service
  //]
})
export class Courses2Module { }
