import { Component } from "@angular/core"
//'@angular/core';

//Angular interpolation
//{{}} - Template Expression - it can be any Valid Typescript Expression like a+b,2+3,getmethod(),name,
@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`, //`` - used for multile strings . can use "",'' also if its single line 
  //template: `<div>
  //                  <h1>{{name}}</h1>
  //                  <my-employee> </my-employee>
  //              </div>`
  templateUrl: "app/app.component.html",
  //styles: [`
  //          .boldClass{
  //              font-weight:bold;
  //          }

  //          .italicsClass{
  //              font-style:italic;
  //          }

  //          .colorClass{
  //              color:red;
  //          }
  //           `]
  

})
export class AppComponent
{
    name: string = 'Angular2 from Kdv';
    getMethod(): string{
        return this.name + " Method call";

    }
    ImagePath: string = "http://connect.kw.zain.com/postbb/docroot/zain/themes/webviews/default_en/images/logo.png";
    isDisabled: boolean = true;

    //CSS Class binding in Angular

    classesToApply: string = 'italicsClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = true;
    //for ngClass Binding
    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };

        return classes;
    }

    //CSS Style Binding in Angular
    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;
    //for ngStyle Binding
    addStyles() {
        let styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };

        return styles;
    }

    //Property Binding - Data flow from Angular component class to HTML Element - can use either Interpolation/property binding
    //Event Binding - Data flow from HTML Element to Angular Component Class
    //Two-way Databinding is combination of Property Binding and Event Binding
    //It can be perfectly done using ngModel Angular directive for 2 way binding
    TexboxVal: string = "Tom";
    //    ngModel directive is, in an Angular system module called FormsModule.For us to be able to use ngModel directive in our root module - AppModule, we will have to import FormsModule first.
    //Here are the steps to import FormsModule into our AppModule
    //1. Open app.module.ts file
    //2. Include the following import statement in it
    //import { FormsModule } from '@angular/forms';
    //3. Also, include FormsModule in the 'imports' array of @NgModule
    //imports: [BrowserModule, FormsModule]

    //Angular structural directive - ngIf,ngFor

    //Simple Component Life cycle Hook changes
    SimpleComponetTextbox: string = "Simple";
}
