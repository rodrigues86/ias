import { EmployeeComponent } from './../model/employee/employee.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  private url = '/employee/';

  // Fetch all existing employees
  getEmployees(): Observable<EmployeeComponent[]> {
    console.log('i am the function getEmployees into service EmployeeService');
    // ...using get request
    return this.http.get(this.url)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
