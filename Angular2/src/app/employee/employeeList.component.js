"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import OnInit Life Cycle Hook interface
var core_1 = require("@angular/core");
// Import EmployeeService
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = (function () {
    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        // The view template will bind to this property to display
        // "Loading data. Please wait..." message when the data is
        // being loaded. If there is an error the second arrow
        // function in the subscribe method sets this property to
        // "Problem with the service. Please try again after sometime"
        this.statusMessage = 'Loading data. Please wait...';
        // This property keeps track of which radio button is selected
        // We have set the default value to All, so all the employees
        // are displayed in the table by default
        this.selectedEmployeeCountRadioButton = 'All';
    }
    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.employees =
        this._employeeService.getEmployees().subscribe(function (employeesData) { return _this.employees = employeesData; }, function (error) {
            // Notice here we are logging the error to the browser console
            console.error(error);
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
        });
    };
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
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css'],
        // Register EmployeeService in this component by
        // declaring it in the providers array
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//interface Implementation
var EmployeeListComponentInterfaceImplementation = (function () {
    function EmployeeListComponentInterfaceImplementation() {
    }
    return EmployeeListComponentInterfaceImplementation;
}());
exports.EmployeeListComponentInterfaceImplementation = EmployeeListComponentInterfaceImplementation;
var Employee = (function () {
    // The above class properties are then initialized
    // using the constructor parameters. To do something
    // like this, TypeScript has a shorthand syntax which
    // reduces the amount of code we have to write
    function Employee(code, name, gender, annualSalary, dateOfBirth) {
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
    Employee.prototype.computeMonthlySalary = function (annualSalary) {
        return annualSalary / 12;
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employeeList.component.js.map