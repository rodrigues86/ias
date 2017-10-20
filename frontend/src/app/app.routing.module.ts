import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Define the routes
export const routes = [
  { //It associates the url / with the view ViewMainComponent
    path: '',
    data: ['Getting started'],
    component: AppComponent
  },
  { //It associates the url /employee with the view ViewEmployeeComponent
    path: 'employee',
    data: ['Employee'],
    component: EmployeeComponent
  },
  { //Redirect urls not found at root
    path: '**',
    redirectTo: '/'
  }
  //It would be best to create a page dedicated to this work
  //	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
