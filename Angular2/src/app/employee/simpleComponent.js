//A component has a lifecycle managed by Angular.Angular
//Creates the component
//Renders the component
//Creates and renders the component children
//Checks when the component data- bound properties change, and
//Destroys the component before removing it from the DOM
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
//Life        Cycle Hook	Purpose
//ngOnChanges	Executes, every time the value of an input property changes.The hook method receives a SimpleChanges object containing current and previous property values.This is called before ngOnInit
//ngOnInit	Executes after the constructor and after ngOnChange hook for the first time.It is most commonly used for component initialisation and retrieving data from a database
//ngOnDestroy	Executes just before angular destroys the component and generally used for performing cleanup
//Step 1 : Import the Life Cycle Hook interface.For example, to use ngOnInit() life cycle hook, import OnInit interface.
var core_1 = require("@angular/core");
// The selector "simple" will be used as the directive
// where we want to use this component. Notice we are
// also using the simpleInput property with interpolation
// to display the value it receives from the parent
// component
var SimpleComponent = (function () {
    // Step 2 : Implement OnChanges Life Cycle Hook interface
    //Make the component class implement the Life Cycle Hook interface, using the implements keyword as shown below.This step is optional, but good to have so you will get editor support and flags errors at compile time if you incorrectly implement the interface method or make any typographical errors.
    function SimpleComponent() {
    }
    //Write the implementation code for the life cycle interface method. Each interface has a single hook method whose name is the interface name prefixed with ng.
    SimpleComponent.prototype.ngOnInit = function () {
        console.log('OnInit Life Cycle Hook');
    };
    // Step 3 : Implementation for the hook method
    // This code logs the current and previous value
    // to the console.
    SimpleComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var current = JSON.stringify(change.currentValue);
            var previous = JSON.stringify(change.previousValue);
            //console.log(propertyName + ': currentValue = '
            //    + current + ', previousValue = ' + previous);
            // The above line can be rewritten using
            // placeholder syntax as shown below
            console.log(propertyName + ": currentValue\n             = " + current + ", previousValue = " + previous);
        }
    };
    return SimpleComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SimpleComponent.prototype, "simpleInput", void 0);
SimpleComponent = __decorate([
    core_1.Component({
        selector: 'simple',
        template: "You entered : {{simpleInput}}"
    })
], SimpleComponent);
exports.SimpleComponent = SimpleComponent;
//# sourceMappingURL=simpleComponent.js.map