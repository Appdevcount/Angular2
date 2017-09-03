//AppModule is the root module which bootstraps and launches the angular application.You can name it anything you want, but by convention it is named AppModule.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

//In our angular application root module (app.module.ts), import RouterModule and Routes array and define routes as shown below.
import { RouterModule, Routes } from '@angular/router';
// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
//The order of the routes is very important.When matching routes, Angular router uses first- match wins strategy.
//const appRoutes: Routes = [
//    { path: 'home', component: HomeComponent },
//    { path: 'employees', component: EmployeeListComponent },
//    { path: '', redirectTo: '/home', pathMatch: 'full' },
//    { path: '**', component: PageNotFoundComponent }
//];

// To let the router know about the routes defined above,
// pass "appRoutes" constant to forRoot(appRoutes) method

import { HttpModule } from '@angular/http';//For HTTP Service

import { AppComponent } from './app.component';
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employeeList.component";
import { EmployeeTitlePipe } from "./employee/employeeTitle.pipe";
import { EmployeeCountComponent } from "./employee/employeeCount.component"
import { SimpleComponent } from "./employee/simpleComponent";
//import { HomeComponent } from './home/home.component';
//import { PageNotFoundComponent } from './others/pageNotFound.component';



@NgModule({//NgModule - @component decorator adds metadata to an angular component class, similarly @NgModule decorator adds metadata to the angular module class.
    imports: [BrowserModule, FormsModule, HttpModule], //, RouterModule.forRoot(appRoutes)//, { useHash: true }) -To use "hash style" urls instead of HTML5 style url's, you just need to make one change in app.module.ts file. Set useHash property to true and pass it to the forRoot() method as shown below.If you are using "hash style" routes, we don't need the URL rewrite rule in web.config file.
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe,
        EmployeeCountComponent, SimpleComponent], /*, HomeComponent, PageNotFoundComponent*/
    bootstrap: [AppComponent]
})
export class AppModule { }

//Properties of the @NgModule decorator
//imports - Imports the BrowserModule required for an angular application to run in a web browser
//declarations - Contains the components registered with this module.In our case we have two - AppComponent and EmployeeComponent
//bootstrap - Contains the root component that Angular creates and inserts into the index.html host web page