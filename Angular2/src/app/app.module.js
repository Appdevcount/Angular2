//AppModule is the root module which bootstraps and launches the angular application.You can name it anything you want, but by convention it is named AppModule.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeList_component_1.EmployeeListComponent, employeeTitle_pipe_1.EmployeeTitlePipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//Properties of the @NgModule decorator
//imports - Imports the BrowserModule required for an angular application to run in a web browser
//declarations - Contains the components registered with this module.In our case we have two - AppComponent and EmployeeComponent
//bootstrap - Contains the root component that Angular creates and inserts into the index.html host web page 
//# sourceMappingURL=app.module.js.map