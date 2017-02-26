import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../services/courses';
import { Course } from '../models/course';


@Component({
  selector: 'courses',
  providers: [CoursesService],
  templateUrl: `courses.component.html`,
  styleUrls: [`courses.component.css`]
})

@Injectable()
export class CoursesComponent implements OnInit {
  public rawCourses: Array<Course>;
  public courses: Array<Course>;
  public query: string;

  constructor(private _coursesService: CoursesService, private _router: Router) { }


  ngOnInit() {
    this.getAllItems();
  }

  getFilteredCourses(): Array<Course> {
    if (this.query && this.query.length > 0) {
      return this.rawCourses.filter(x =>
        x.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
    } else {
      return this.rawCourses;
    }
  }

  private getAllItems(): void {
    this._coursesService
      .getCourses()
      .subscribe((data) => {
        this.rawCourses = data;
        this.courses = this.getFilteredCourses();
      },
      error => console.log(error),
      () => console.log('Get all Items complete'));
  }

  private addCourse(e: Event): void {
    e.preventDefault();
    this._router.navigate(['/courses/add']);
  }

  private deleteCourse(c: Course) {
    if (confirm(`Are you sure you want to delete courese ${c.name}?`)) {
      this._coursesService.deleteCourse(c.id)
        .subscribe(x => this.getAllItems());
    }
  }

  private editCourse(c: Course, e: Event) {
    e.preventDefault();
    this._router.navigate(['/courses/' + c.id]);
  }

  private onSearch() {
    this.courses = this.getFilteredCourses();
  }

}
