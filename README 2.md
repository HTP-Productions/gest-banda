# GestBanda

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

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


Para instalar as dependencias apos checkout
npm install

Para arrancar o serviço do Node.Js:
ng serve --open

/*Componentes são o equivalente a uma estrutura MVV (html/css - View) component ViewModel */
ng generate component heroes

/* Servicos sao clientes para Webservices */
ng generate service hero


/*  Para publicar para Cordova: */
ng build --prod --base-href . --output-path ../../CordovaProjects/CordovaMobileApp/www/
ng build --prod --base-href . --output-path public



SQLITTE:
npm i cordova-sqlite-storage
ng g service Cordova


Enviar para o Firebase:
ng build --prod --base-href . --output-path public
firebase deploy
