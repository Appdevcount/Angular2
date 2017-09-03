//A component has a lifecycle managed by Angular.Angular
//Creates the component
//Renders the component
//Creates and renders the component children
//Checks when the component data- bound properties change, and
//Destroys the component before removing it from the DOM

//Life        Cycle Hook	Purpose
//ngOnChanges	Executes, every time the value of an input property changes.The hook method receives a SimpleChanges object containing current and previous property values.This is called before ngOnInit
//ngOnInit	Executes after the constructor and after ngOnChange hook for the first time.It is most commonly used for component initialisation and retrieving data from a database
//ngOnDestroy	Executes just before angular destroys the component and generally used for performing cleanup

//Step 1 : Import the Life Cycle Hook interface.For example, to use ngOnInit() life cycle hook, import OnInit interface.

import { OnInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

// The selector "simple" will be used as the directive
// where we want to use this component. Notice we are
// also using the simpleInput property with interpolation
// to display the value it receives from the parent
// component
@Component({
    selector: 'simple',
    template: `You entered : {{simpleInput}}`
})
// Step 2 : Implement OnChanges Life Cycle Hook interface
//Make the component class implement the Life Cycle Hook interface, using the implements keyword as shown below.This step is optional, but good to have so you will get editor support and flags errors at compile time if you incorrectly implement the interface method or make any typographical errors.

export class SimpleComponent implements OnChanges,OnInit {
    // Input property. As and when this property changes
    // ngOnChanges life cycle hook method is called
    @Input() simpleInput: string;

    //Write the implementation code for the life cycle interface method. Each interface has a single hook method whose name is the interface name prefixed with ng.
    ngOnInit() {
        console.log('OnInit Life Cycle Hook');

    }
    // Step 3 : Implementation for the hook method
    // This code logs the current and previous value
    // to the console.
    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            //console.log(propertyName + ': currentValue = '
            //    + current + ', previousValue = ' + previous);
            // The above line can be rewritten using
            // placeholder syntax as shown below
             console.log(`${propertyName}: currentValue
             = ${current }, previousValue = ${previous }`);
        }
    }

}
