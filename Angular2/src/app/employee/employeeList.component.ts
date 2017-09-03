// Import OnInit Life Cycle Hook interface
import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
// Import EmployeeService
import { EmployeeService } from './employee.service';


@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    // Register EmployeeService in this component by
    // declaring it in the providers array
    providers: [EmployeeService]
})
export class EmployeeListComponent {

    //ngFor directive to get the collection of objects to be displayed in HTML elements.This directive has many properties

    employees: any[];

    // The view template will bind to this property to display
    // "Loading data. Please wait..." message when the data is
    // being loaded. If there is an error the second arrow
    // function in the subscribe method sets this property to
    // "Problem with the service. Please try again after sometime"
    statusMessage: string = 'Loading data. Please wait...';


    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    constructor(private _employeeService: EmployeeService) {
    }

    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    ngOnInit() {
        //this.employees =
        this._employeeService.getEmployees().subscribe(employeesData => this.employees = employeesData
            ,
            error => {
                // Notice here we are logging the error to the browser console
                console.error(error);
                this.statusMessage = 'Problem with the service. Please try again after sometime';
            });
    }


    //constructor() {
    //    this.employees = [
    //        {
    //            code: 'emp101', name: 'Tom', gender: 'Male',
    //            annualSalary: 5500, dateOfBirth: '06/6/1988'
    //        },
    //        {
    //            code: 'emp102', name: 'Alex', gender: 'Male',
    //            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //        },
    //        {
    //            code: 'emp103', name: 'Mike', gender: 'Male',
    //            annualSalary: 5900, dateOfBirth: '12/8/1979'
    //        },
    //        {
    //            code: 'emp104', name: 'Mary', gender: 'Female',
    //            annualSalary: 6500.826, dateOfBirth: '11/10/1980'
    //        },
    //    ];
    //}

    //getEmployees(): void {
    //    this.employees = [
    //        {
    //            code: 'emp101', name: 'Tom', gender: 'Male',
    //            annualSalary: 5500, dateOfBirth: '6/6/1988'
    //        },
    //        {
    //            code: 'emp102', name: 'Alex', gender: 'Male',
    //            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //        },
    //        {
    //            code: 'emp103', name: 'Mike', gender: 'Male',
    //            annualSalary: 5900, dateOfBirth: '12/8/1979'
    //        },
    //        {
    //            code: 'emp104', name: 'Mary', gender: 'Female',
    //            annualSalary: 6500.826, dateOfBirth: '11/10/1980'
    //        },
    //        {
    //            code: 'emp105', name: 'Nancy', gender: 'Female',
    //            annualSalary: 6700.826, dateOfBirth: '11/12/1982'
    //        },
    //    ];
    //}

    //employees: any[] = [
    //    {
    //        code: 'emp101', name: 'Tom', gender: 'Male',
    //        annualSalary: 5500, dateOfBirth: '25/6/1988'
    //    },
    //    {
    //        code: 'emp102', name: 'Alex', gender: 'Male',
    //        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //    },
    //    {
    //        code: 'emp103', name: 'Mike', gender: 'Male',
    //        annualSalary: 5900, dateOfBirth: '12/8/1979'
    //    },
    //    {
    //        code: 'emp104', name: 'Mary', gender: 'Female',
    //        annualSalary: 6500.826, dateOfBirth: '14/10/1980'
    //    },
    //];


    //Pipes in Angular
    //Transform data before display
    //Pipe	    URL
    //Date	    https://angular.io/api/common/DatePipe
    //Decimal	https://angular.io/api/common/DecimalPipe
    //Currency	https://angular.io/api/common/CurrencyPipe
    //Percent	https://angular.io/api/common/PercentPipe

    //Angular 2 Container and Nested component

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';
    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }


}


//interface Implementation
export class EmployeeListComponentInterfaceImplementation {
    employees: IEmployee[];
}
export class Employee implements IEmployee {
    // All the interface mandatory properties are defined  
    public code: string;
    public name: string;
    public gender: string;
    public annualSalary: number;
    public dateOfBirth: string;

    // The above class properties are then initialized
    // using the constructor parameters. To do something
    // like this, TypeScript has a shorthand syntax which
    // reduces the amount of code we have to write
    constructor(code: string, name: string, gender: string,
        annualSalary: number, dateOfBirth: string) {
        this.code = code;
        this.name = name;
        this.gender = gender;
        this.annualSalary = annualSalary;
        this.dateOfBirth = dateOfBirth;
    }
    //constructor(public code: string, public name: string, public gender: string,
    //    public annualSalary: number, public dateOfBirth: string) {
    //}
    //constructor(private firstName: string, private lastName: string) {
    //}

    // Implementation of the interface method
    computeMonthlySalary(annualSalary: number): number {
        return annualSalary / 12;
    }
}