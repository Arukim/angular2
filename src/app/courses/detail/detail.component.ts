import {Component, OnInit, OnDestroy, Injectable} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../models/course';
import { DateComponent } from '../common/date.component';
import { CoursesService } from '../../services/courses';

@Component({
  selector: 'courses-detail',
  providers: [CoursesService],
  template: `
        <div *ngIf="model">
            <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
                <div>
                    <label for="name">Name</label>
                    <input name="name" [(ngModel)]="model.name" required>
                </div>
                <div>
                    <label for="created">Created</label>
                    <date></date>
                </div>
                <div class="form-group">
                    <label for="duration">Duration</label>
                    <input name="duration" [(ngModel)]="model.duration" type="number">
                </div>
                <div cass="form-group">
                  <label for="desc"> Description </label>
                  <textarea name="desc" [(ngModel)]="model.description"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    `
})

@Injectable()
export class CoursesDetailComponent implements OnInit, OnDestroy {

  public model: Course;
  private sub: any;

  submitted = false;

  constructor(private _route: ActivatedRoute,
    private _coursesService: CoursesService,
    private _router: Router) {

  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      var id = params['id'];
      if (id == 'add') {
        this.model = new Course("", "", new Date(), "", 0, []);
      } else {
        this._coursesService.getCourse(params['id'])
          .subscribe(x => this.model = x);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    if (this.model.id == "") {
      this._coursesService.createCourse(this.model)
        .subscribe(x => this._router.navigate(['/courses']));
    } else {
      this._coursesService.updateCourse(this.model)
        .subscribe(x => this._router.navigate(['/courses']));
    }
  }

  set humanDate(str) {
    let e = str.split('-');
    let d = new Date(Date.UTC(parseInt(e[0]), parseInt(e[1]) - 1, parseInt(e[2])));
    this.model.created.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  }

  get humanDate() {
    return this.model.created.toISOString().substring(0, 10);
  }

}
