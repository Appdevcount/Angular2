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
var http_1 = require("@angular/http"); //For HTTP Service
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var simpleComponent_1 = require("./employee/simpleComponent");
//import { HomeComponent } from './home/home.component';
//import { PageNotFoundComponent } from './others/pageNotFound.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeList_component_1.EmployeeListComponent, employeeTitle_pipe_1.EmployeeTitlePipe,
            employeeCount_component_1.EmployeeCountComponent, simpleComponent_1.SimpleComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//Properties of the @NgModule decorator
//imports - Imports the BrowserModule required for an angular application to run in a web browser
//declarations - Contains the components registered with this module.In our case we have two - AppComponent and EmployeeComponent
//bootstrap - Contains the root component that Angular creates and inserts into the index.html host web page 
//# sourceMappingURL=app.module.js.map