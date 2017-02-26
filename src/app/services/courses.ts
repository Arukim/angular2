import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Course } from '../models/course';
import { Observable } from 'rxjs/Rx';
import { Configuration } from '../app.constants';

@Injectable()
export class CoursesService  {
    private readonly _baseUrl: string;
    private headers: Headers;

    constructor(private _http: Http,
    private _configuration: Configuration){
        this._baseUrl = _configuration.ServerWithApiUrl;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getCourse(courseId: string): Observable<Course>{
        return this._http.get(this._baseUrl + courseId)
        .map((response) => <Course>response.json())
        .catch(this.handleError);
    }

    getCourses(): Observable<Array<Course>>{
        return this._http.get(this._baseUrl)
        .map((response) => <Array<Course>>response.json())
        .catch(this.handleError);
    }

    createCourse(c: Course): Observable<string>{
        return this._http.post(this._baseUrl, c, this.headers)
        .map((response) => <string>response.json())
        .catch(this.handleError);
    }

    updateCourse(c: Course): Observable<void>{
        return this._http.put(this._baseUrl + c.id, c, this.headers)
        .catch(this.handleError);
    }

    deleteCourse(id: string): Observable<void>{
        return this._http.delete(this._baseUrl + id)
        .catch(this.handleError);
    }

     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
