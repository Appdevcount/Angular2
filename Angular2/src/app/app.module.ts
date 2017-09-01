//AppModule is the root module which bootstraps and launches the angular application.You can name it anything you want, but by convention it is named AppModule.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employeeList.component";
import { EmployeeTitlePipe } from "./employee/employeeTitle.pipe"

@NgModule({//NgModule - @component decorator adds metadata to an angular component class, similarly @NgModule decorator adds metadata to the angular module class.
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe],
    bootstrap: [AppComponent]
})
export class AppModule { }

//Properties of the @NgModule decorator
//imports - Imports the BrowserModule required for an angular application to run in a web browser
//declarations - Contains the components registered with this module.In our case we have two - AppComponent and EmployeeComponent
//bootstrap - Contains the root component that Angular creates and inserts into the index.html host web page