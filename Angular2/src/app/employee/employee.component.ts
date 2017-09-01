import { Component } from "@angular/core";

@Component({
    selector: "my-employee",
    templateUrl: "app/employee/employee.component.html",
    //styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: small; border-collapse: collapse;}', 'td {border: 1px solid black; }'],
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;

    // Class Binding in Angular
    columnSpan: number = 4;

    //Event Binding in Angular - Just like WEBFORM - Flow data from an HTML element to a Angular component Class
    onClick(): void {
        console.log('Button Clicked');
    }
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}
