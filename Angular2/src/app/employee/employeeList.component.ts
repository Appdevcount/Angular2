import { Component } from '@angular/core';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})
export class EmployeeListComponent {

    //ngFor directive to get the collection of objects to be displayed in HTML elements.This directive has many properties

    employees: any[];

    constructor() {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '06/6/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '11/10/1980'
            },
        ];
    }

    getEmployees(): void {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '6/6/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '11/10/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '11/12/1982'
            },
        ];
    }

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
