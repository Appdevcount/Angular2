import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router"

import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";


@Component({
    selector: "my-employee",
    templateUrl: "app/employee/employee.component.html",
    //styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: small; border-collapse: collapse;}', 'td {border: 1px solid black; }'],
    styleUrls: ['app/employee/employee.component.css'],
    providers: [EmployeeService]
})

export class EmployeeComponent {
    //firstName: string = 'Tom';
    //lastName: string = 'Hopkins';
    //gender: string = 'Male';
    //age: number = 20;

    //// Class Binding in Angular
    //columnSpan: number = 4;

    ////Event Binding in Angular - Just like WEBFORM - Flow data from an HTML element to a Angular component Class
    //onClick(): void {
    //    console.log('Button Clicked');
    //}
    //showDetails: boolean = false;

    //toggleDetails(): void {
    //    this.showDetails = !this.showDetails;
    //}



    //Below implementation for routing with parameter demonstration

    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage =
                    'Problem with the service. Please try again after sometime';
                console.error(error);
            });
    }
}
