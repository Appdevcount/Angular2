"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//'@angular/core';
//Angular interpolation
//{{}} - Template Expression - it can be any Valid Typescript Expression like a+b,2+3,getmethod(),name,
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular2 from Kdv';
        this.ImagePath = "http://connect.kw.zain.com/postbb/docroot/zain/themes/webviews/default_en/images/logo.png";
        this.isDisabled = true;
        //CSS Class binding in Angular
        this.classesToApply = 'italicsClass boldClass';
        this.applyBoldClass = true;
        this.applyItalicsClass = true;
        //CSS Style Binding in Angular
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
        //Property Binding - Data flow from Angular component class to HTML Element - can use either Interpolation/property binding
        //Event Binding - Data flow from HTML Element to Angular Component Class
        //Two-way Databinding is combination of Property Binding and Event Binding
        //It can be perfectly done using ngModel Angular directive for 2 way binding
        this.TexboxVal = "Tom";
        //    ngModel directive is, in an Angular system module called FormsModule.For us to be able to use ngModel directive in our root module - AppModule, we will have to import FormsModule first.
        //Here are the steps to import FormsModule into our AppModule
        //1. Open app.module.ts file
        //2. Include the following import statement in it
        //import { FormsModule } from '@angular/forms';
        //3. Also, include FormsModule in the 'imports' array of @NgModule
        //imports: [BrowserModule, FormsModule]
        //Angular structural directive - ngIf,ngFor
        //Simple Component Life cycle Hook changes
        this.SimpleComponetTextbox = "Simple";
    }
    AppComponent.prototype.getMethod = function () {
        return this.name + " Method call";
    };
    //for ngClass Binding
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    };
    //for ngStyle Binding
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };
        return styles;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<h1>Hello {{name}}</h1>`, //`` - used for multile strings . can use "",'' also if its single line 
        //template: `<div>
        //                  <h1>{{name}}</h1>
        //                  <my-employee> </my-employee>
        //              </div>`
        templateUrl: "app/app.component.html",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map