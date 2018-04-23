import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedCourseReceiverComponent } from './created-course-receiver.component';

describe('CreatedCourseReceiverComponent', () => {
  let component: CreatedCourseReceiverComponent;
  let fixture: ComponentFixture<CreatedCourseReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedCourseReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedCourseReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
