# DnD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Website code setup in Visual Studio Code
   Go to Top menu
   1. File/Open Folder...
      Select the RegistrationWeb which you have cloned from the GITHUB.
   2. Terminal/New Terminal
      Execute the following installation in New Terminal
      a) npm install     
      b) npm install -g @angular/cli     (Needed if not Global)
      c) npm install -g typescript       (Needed if not Global)
      d) npm install -g bootstrap --save (Needed if not Global)
         copy @import '~bootstrap/dist/css/bootstrap.min.css'; to styles.css
      e) npm install --save font-awesome angular-font-awesome  (Needed if not Global)
         copy @import "~font-awesome/css/font-awesome.css"; to styles.css
      f) npm install --save @angular/cdk @angular/material @angular/animations hammers
         copy @import "~@angular/material/prebuilt-themes/indigo-pink.css"; to style.css
      g) npm install @material-extended/mde    
	  h) npm install ngx-mask --save 
      i) npm install ngx-show-hide-password --save 
      j) npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons --save
      k) matIcon:
         copy @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
