import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFirst } from './my-first/my-first.component';
import { MyFirst2Component } from './my-first-2/my-first-2.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirst,
    MyFirst2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
